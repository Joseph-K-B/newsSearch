export const fetchNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.REACT_APP_NEWS_API}`);
    const articles = await res.json();
    console.log('news', articles);
    return articles.articles;
}

