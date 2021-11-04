import React from 'react'

export default function Article({ source, author, title, url, urlToImage, content }) {
    return (
        <figure>
            <h2>{title}</h2>
            <img src={urlToImage} alt={title} height={200} width={300}/>
            <figcaption>
                <ul>
                    <li>Author - {author}</li>   
                    <li>Link - {url}</li>
                </ul>
                    <p>{content}</p>
            </figcaption>
        </figure>
    )
}