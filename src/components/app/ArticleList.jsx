import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import '../../styles/list.css'

export default function ArticleList({ articles }) {
    const articleList = articles.map(({ author, title, url, urlToImage, content }) => (
        <li key={`${title}`} className='articles'>
            <Article 
                // name={name} 
                author={author} 
                title={title} 
                url={url} 
                urlToImage={urlToImage} 
                content={content}/>
        </li>
    ));
    return <ul aria-label='articles' className='articles'>{articleList}</ul>;
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string,
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            urlToImage: PropTypes.string,
            content: PropTypes.string,
        })
    )
}