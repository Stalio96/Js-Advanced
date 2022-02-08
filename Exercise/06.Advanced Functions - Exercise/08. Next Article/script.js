function getArticleGenerator(articles) {
    // TODO
    let article = articles;
    function showNext() {
        let div = document.getElementById('content');

        if (article.length > 0) {
            let para = document.createElement('article');
            para.textContent = article.shift();

            div.appendChild(para);
        }
    }

    return showNext;
}
