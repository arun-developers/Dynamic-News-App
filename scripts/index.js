// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from '../components/navbar.js';

let n = document.getElementById("navbar");

n.innerHTML = navbar();

import { SearchImages, append } from '../components/fetch.js'

let Search = (e) => {
    if (e.key === "Enter") {

        let value = document.getElementById("query").value;

        SearchImages(value).then((data) => {

            console.log(data);

            let container = document.getElementById("news_bar");

            container.innerHTML = null;  // to empty the div after and before searching 

            append(data.articles, container);
        })
    }
}
document.getElementById("query").addEventListener("keydown", Search);

// let SearchImages = async () => {

//     let value = document.getElementById("query").value;

//     try {

//         let res = await fetch(
//             `https://masai-mock-api.herokuapp.com/news?q=${value}`
//         );
//         let data = await res.json();

//         console.log(data);
//     }
//     catch (err) {

//         console.log(err);
//     }
// }

