import React from 'react';
import PropTypes from 'prop-types';

export default function Article({ source, author, title, url, urlToImage, content }) {
    return (
        <figure>
            <h2>{title}</h2>
            <img src={urlToImage} alt={title} height={200} width={300}/>
            <figcaption>
                <ul>
                    <li>Author - {author}</li>   
                    <li><a href={url} >Link</a></li>
                </ul>
                    <p>{content}</p>
            </figcaption>
        </figure>
    );
}

Article.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}