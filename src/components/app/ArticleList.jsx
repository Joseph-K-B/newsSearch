import React from 'react';
import Article from './Article';

export default function ArticleList({ articles }) {
    const articleList = articles.map(({ author, title, url, urlToImage, content }) => (
        <li key={`${title}`}>
            <Article 
                // name={name} 
                author={author} 
                title={title} 
                url={url} 
                urlToImage={urlToImage} 
                content={content}/>
        </li>
    ));
    return <ul aria-label='articles'>{articleList}</ul>;
}

// articles": [
//     -{
//     -"source": {
//     "id": "the-washington-post",
//     "name": "The Washington Post"
//     },
//     "author": "Mike DeBonis",
//     "title": "Senate Republicans block debate on the John Lewis Voting Rights Advancement Act - The Washington Post",
//     "description": "The John Lewis Voting Rights Advancement Act would restore federal election-law review provisions that have been struck down by the Supreme Court in recent years.",
//     "url": "https://www.washingtonpost.com/politics/senate-voting-john-lewis/2021/11/03/de00974e-3cc5-11ec-bfad-8283439871ec_story.html",
//     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IKMUGPR4CQI6ZPLP3I3W6RZQJY.jpg&w=1440",
//     "publishedAt": "2021-11-03T19:46:52Z",
//     "content": "The two prior bills put forth by congressional Democrats sought to impose a broad variety of new federal mandates for how states conduct elections, setting minimum standards for early voting and vote… [+4067 chars]"
//     },