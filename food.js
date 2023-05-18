//setting food regions
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
let setAmerican = () => {
    return (region = "fusion");
}
let setMiddleEastern = ()=> {
    return (region = "middle_eastern");
}
let setIndian = () => {
    return (region = "indian");
}
// setting my genre regions
let genreRegion = ''
let setFantasy = () => {
    return (genreRegion = 'Fantasy')
}
let setComedy = () => {
    return (genreRegion = 'Comedy')
}
let setAction = () => {
    return (genreRegion = 'Action')
}
let setAdventure = () => {
    return (genreRegion = 'Adventure')
}
let setDrama = () => {
    return (genreRegion = 'Drama')
}
let setRomance = () => {
    return (genreRegion = 'Romance')
}
// Function for displaying recipes
let displayRecipeOptions = (region) => {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "797577513fmsh416afd2e0137296p1dee25jsn6deba288b462",
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
    };
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=40&tags=${region}`, options)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (i = 0; i < 3; i++) {
            let r = Math.floor(Math.random() * 40);
            let item = data.results[r];
            let name = item.name;
            let recipeCARD = `
            <div class="card text-white bg-dark" style="width: 100%;">
            <img class="card-img-top " src="${item.thumbnail_url}" alt="Card image cap" style='width: 18rem;'>
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <a href="https://tasty.co/recipe/${item.slug}" target="_blank" class="btn btn-danger">Go to Recipe</a>
            </div>
            </div>`;
            let sec = document.createElement("div");
            sec.innerHTML = recipeCARD;
            posts.append(sec);
        }
    })
    .catch((err) => console.error(err));
}
// Function for displaying movies
function displayMovieOptions(x) {
    const options = {
        method: 'GET',
		headers: {
            'X-RapidAPI-Key': '797577513fmsh416afd2e0137296p1dee25jsn6deba288b462',
			'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
		}
	};
	fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${x}&list=top_boxoffice_200&sort=year.decr&limit=50`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response.results)
        console.log(response.results[0].titleText.text)
        console.log(response.results[0].primaryImage.url)
        for(let i = 0; i < 3; i++){
            let r = Math.round(Math.random()*response.results.length)
            let item = response.results[r]
            console.log(item)
            let movieCard = document.createElement('div')
            movieCard.classList.add('card-container')
            movieCard.innerHTML = `
            <div class="card text-white bg-dark" style="width: 100%;" >
            <img src=${item.primaryImage.url} style='width: 18rem;'
            class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.titleText.text}</h5>
            <p class="card-text"></p>
            <a href="https://www.imdb.com/title/${item.id}/" target="_blank" class="btn">Movie Preview</a>
            </div>
            </div>
            `
            let moviesContainer = document.getElementById('movies-container')
            moviesContainer.appendChild(movieCard)
        }
    })
    .catch(err => console.error(err));
}


let gen = document.querySelector("#generate-btn");

gen.addEventListener("click",() => {
    displayRecipeOptions(region)
    displayMovieOptions(genreRegion);
},
{ once: true }
);

let reset = document.querySelector('#reset-btn')
reset.addEventListener('click', () => {
    location.reload()
})