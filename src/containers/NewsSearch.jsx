import React, { Component } from 'react';
import ArticleList from '../components/app/ArticleList';
import { fetchNews } from '../services/NewsAPI';

class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [],
    }

    async componentDidMount() {
        const articles = await fetchNews();
        console.log('ARTICLES', articles);
        this.setState({ articles, loading: false })
    }
    
    render() {
        return(
            <>
                if (loading) return <h1>Loading...</h1>;
                return (
                    <>
                        <ArticleList articles={articles} />
                    </>
                )
            </>
        )
    }
}

export default NewsSearch