const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "879a4d0e03mshc29407a7de2dbaep143932jsna2d846789c8c",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
};

// let posts = document.querySelector("#posts");
let posts = document.querySelector(".recipes-cat-container");
let region = "";

let setChinese = () => {
    return (region = "chinese");
};

let setMexican = () => {
    return (region = "mexican");
};

let setItalian = () => {
    return (region = "italian");
};
//
let gen = document.querySelector("#generate-btn");

gen.addEventListener(
    "click",
    () => {
        fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&tags=${region}`, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                for (i = 0; i < 3; i++) {
                    let r = Math.floor(Math.random() * 40);
                    let item = data.results[r];
                    let name = item.name;
                    let recipeHTML = `
                    <h3 id="name">${name}</h3>
                    <a href='https://tasty.co/recipe/${item.slug}'><img src="${item.thumbnail_url}" alt="" height='200px'>`;
                    let recipeCARD = `
                        <div class="card text-white bg-dark">
                            <img class="card-img-top " src="${item.thumbnail_url}" alt="Card image cap" height='200px'>
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <a href="https://tasty.co/recipe/${item.slug}" class="btn btn-danger">Go to Recipe</a>
                            </div>
                        </div>`;
                    let sec = document.createElement("div");
                    sec.innerHTML = recipeCARD;
                    posts.append(sec);
                }
                // data.results[i].forEach((result) => {
                //     console.log(result);
                //     let name = result.name;
                //     let recipeHTML = `<h3 id="name">${name}</h3>
                //     <a href='https://tasty.co/recipe/${result.slug}'><img src="${result.thumbnail_url}" alt="" height='200px'>`;
                //     let sec = document.createElement("section");
                //     sec.innerHTML = recipeHTML;
                //     posts.append(sec);
                // });
            })
            .catch((err) => console.error(err));
    },
    { once: true }
);
