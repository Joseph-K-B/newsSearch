import React, { Component } from 'react';
import ArticleList from '../components/app/ArticleList';
import SearchControls from '../components/app/SearchControls';
import { fetchNews, fetchNewsQuery } from '../services/NewsAPI';
import '../styles/list.css'

class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [],
        subject: ''
    };

    async componentDidMount() {
        const articles = await fetchNews();
        this.setState({ articles, loading: false })
    };

    handleSubjectInput = (e) => {
        this.setState({ subject: e.target.value });
    };
    
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const articles = await fetchNewsQuery(this.state.subject);
        this.setState({ articles, loading: false });
    };

    render() {
        const { loading, articles, subject } = this.state;
        if (loading) return <h1>Loading...</h1>;           
            return (
                <>
                    <SearchControls                       
                      subject = {subject}
                      onSubjectInput={this.handleSubjectInput}
                      onSubmit={this.handleSubmit}
                    />
                    <ArticleList className='articles' articles={articles} />
                </>
            );            
    }
}

export default NewsSearch