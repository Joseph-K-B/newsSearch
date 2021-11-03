export const fetchNews = async () => {
    const res = await fetch('https://newsapi.org/v2/everything?');
    const news = await res.json();
    console.log('news', news);
    return news;
}

