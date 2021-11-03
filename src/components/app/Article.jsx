import React from 'react'

export default function Article({ name, author, title, url, urlToImage, content }) {
    return (
        <figure>
            <img src={urlToImage} alt={title} />
            <figcaption>
                {name}
                {title} - {author}
                {url}
                {content}
            </figcaption>
        </figure>
    )
}