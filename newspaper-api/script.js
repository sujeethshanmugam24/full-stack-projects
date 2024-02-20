document.addEventListener('DOMContentLoaded', getNews);

function getNews() {
    const category = document.getElementById('category').value;
    const apiKey = 'key'; 
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.error('Error fetching news:', error));
}

function displayNews(articles) {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = '';document.addEventListener('DOMContentLoaded', getNews);

    function getNews() {
        const category = document.getElementById('category').value;
        const apiKey = 'key';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    
        const newsList = document.getElementById('news-list');
        newsList.innerHTML = '<div class="loader"></div>';
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayNews(data.articles))
            .catch(error => {

                newsList.innerHTML = '<p class="error">Error fetching news. Please try again later.</p>';
            });
    }
    
    function displayNews(articles) {
        const newsList = document.getElementById('news-list');
        newsList.innerHTML = '';
    
        articles.forEach(article => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h2>${article.title}</h2>
                <p>Source: ${article.source.name}</p>
                <p>Published at: ${new Date(article.publishedAt).toLocaleString()}</p>
                <img src="${article.urlToImage}" alt="Article Image">
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read full article</a>
            `;
            newsList.appendChild(li);
        });
    }
    

    articles.forEach(article => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${article.title}</h2>
            <p>Source: ${article.source.name}</p>
            <p>Published at: ${new Date(article.publishedAt).toLocaleString()}</p>
            <img src="${article.urlToImage}" alt="Article Image">
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read full article</a>
        `;
        newsList.appendChild(li);
    });
}
