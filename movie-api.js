// movie api 

let genreForm = document.querySelector('form')
let genreInput = document.getElementById('genreInput')
let moviesContainer = document.getElementById('moviesContainer')
let movieCard = document.querySelector('.movieCard')

let gen = document.querySelector('#generate-btn')

genreForm.addEventListener('submit', (event) => {
	event.preventDefault()
	let genre = genreInput.value
	console.log(genre)
	displayMovieOptions(genre)
})


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
			// console.log(response.results[0].id)
			console.log(response.results[0].titleText.text)
			console.log(response.results[0].primaryImage.url)

			for(let i = 0; i < 3; i++){
				let r = Math.round(Math.random()*response.results.length)
				let item = response.results[r]
				console.log(item)

				// let movieCard = document.createElement('div')
				// movieCard.classList.add('card-container')
				// movieCard.innerHTML = `
				// <div class="card" style="width: 100%;">
				// 				<img src=${item.primaryImage.url} style='width: 100%;'
				// 				class="card-img-top" alt="...">
				// 				<div class="card-body">
				// 					<h5 class="card-title">${item.titleText.text}</h5>
				// 					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				// 					<a href="#" class="btn btn-primary">Movie Preview</a>
				// 				</div>
				// 			</div>
				// `
				// let movieID = item.id
				// console.log(movieID)
				// moviesContainer.appendChild(movieCard)
			}
		
		
		// .catch(err => console.error(err));
	})
}


