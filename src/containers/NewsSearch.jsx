import React, { Component } from 'react';
import ArticleList from '../components/app/ArticleList';
import SearchControls from '../components/app/SearchControls';
import { fetchNews, fetchNewsQuery } from '../services/NewsAPI';

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
        this.setState({ subject: event.target.value });
    };
    
    handleSubmit = async (e) => {
        event.preventDefault();
        this.setState({ loading: true });
        const articles = await fetchNewsQuery(this.state.subject);
        this.setState({ articles, loading: false });
    };

    render() {
        const { loading, articles, subject} = this.state;
        if (loading) return <h1>Loading...</h1>;           
            return (
                <>
                    <SearchControls 
                      subject = {subject}
                      onSubjectInput={this.handleSubjectInput}
                      onSubmit={this.handleSubmit}
                    />
                    <ArticleList articles={articles} />
                </>
            );            
    }
}

export default NewsSearch