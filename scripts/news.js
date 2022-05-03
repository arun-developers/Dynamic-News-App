// Ude Import export (MANDATORY)
import navbar from '../components/navbar.js';

console.log("navbar", navbar);

let nav = document.getElementById('navbar');

nav.innerHTML = navbar();


async function click_news() {

    try {
        let res = await fetch(
            `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
        );
        let data = await res.json();

        console.log(data);

        let container = document.getElementById("container_news");

        append(data.articles, container);
    }
    catch (err) {

        console.log(err)
    }
}

click_news();

let append = (data, container_news) => {

    data.forEach(({ urlToImage, title, author, description, content }) => {


        let div = document.createElement("div");

        div.setAttribute('class', 'news-div');

        let img1 = document.createElement("img");

        img1.scr = urlToImage;

        let head = document.createElement("h1");

        head.innerText = title;

        let parah2 = document.createElement("h2");

        parah2.innerText = author;

        let para_p = document.createElement("p");

        para_p.innerText = description;

        let para_c = document.createElement("p");

        para_c.innerText = content;

        let dat = document.createElement("date");

        dat.innerText = Date();

        div.append(img1, head, parah2, para_p, para_c, dat);

        container_news.append(div);
    })

}











