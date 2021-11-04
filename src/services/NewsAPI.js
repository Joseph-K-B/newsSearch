export const fetchNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API}`);
    const articles = await res.json();
    return articles.articles;
}

