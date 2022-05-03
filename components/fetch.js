let SearchImages = async (value) => {

    try {

        let res = await fetch(
            `https://masai-mock-api.herokuapp.com/news?q=${value}`
        );
        let data = await res.json();

        return data;
    }
    catch (err) {

        console.log(err);
    }
}

let append = (data, news_bar) => {

    data.forEach(({ author, content, description, title, urlToImage }) => {

        let div = document.createElement("div");

        div.setAttribute("class", "content_div");

        let img = document.createElement("img");

        img.src = urlToImage;

        let div2 = document.createElement("div");

        div2.setAttribute("class", "info_div");

        let titl = document.createElement("h1");

        titl.innerText = title;

        let h2 = document.createElement("h2");

        h2.innerText = author;

        let p = document.createElement("p");

        p.innerText = content;

        let para = document.createElement("p");

        para.innerText = description;

        let dat = document.createElement("date");

        dat.innerText = Date();

        div2.append(titl, h2, p, para, dat);

        div.append(img, div2);

        news_bar.append(div);

    })
}

export { SearchImages, append };