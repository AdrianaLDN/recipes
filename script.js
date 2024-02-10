const appKey = '298eec874a2248a968cac060673ee45b';
const appID = 'be459943';

const search = document.getElementById('search-input');
const submit = document.getElementById('search-button');


submit.addEventListener("click", () => {
	const dishName = document.getElementById('search-input').value;
	if(dishName) {
	sendRequest(dishName)
	} else {
		console.log('Please enter a dish name');
	}
});

//Pressing enter
search.addEventListener("keypress", (e) => {
	if(e.key === "Enter") {
		sendRequest(search.value);
	}
});



//Fetching data from API
async function sendRequest(dishName) {

	// const response = await fetch(`https://api.edamam.com/search?app_id=${appID}&app_key=${appKey}&q=${encodeURIComponent(dishName)}`);
	const response = await fetch(`https://api.edamam.com/search?app_id=${appID}&app_key=${appKey}&q=${(dishName)}`);
	console.log(response);

	const data = await response.json();
	console.log(data);

	useApiData(data);
}



function useApiData(data) {


const roundedCalories = Math.round(data.hits[0].recipe.calories);

	document.getElementById('recipes').innerHTML = `
		<div class="dish">
			<img src="${data.hits[0].recipe.image}" class="dish-image">
			<div class="dish-text">
				<p class="dish-name">${data.hits[0].recipe.label}</p>
				<p class="dish-calories">${roundedCalories}</p>
				<p class="dish-prep">${data.hits[0].recipe.ingredientLines}</p>
				<a href="${data.hits[0].recipe.url}">See recipe</a>
			</div>
		</div>
	`
}










// const search = document.getElementById('search-input');
// const submit = document.getElementById('search-button');

// submit.addEventListener("click", () => {
// 	console.log('button');
// 	sendRequest()
// })

// async function sendRequest() {

// 	const response = await fetch(`https://api.edamam.com/search?app_id=${appID}&app_key=${appKey}&q=pizza`);
// 	console.log(response);

// 	const data = await response.json();
// 	console.log(data);

// 	useApiData(data)
// }

// //

// function useApiData(data) {
// 	document.getElementById('recipes').innerHTML = `
// 		<div class="dish">
// 			<img src="${data.hits[0].recipe.image}" class="dish-image">
// 			<div class="dish-text">
// 				<p class="dish-name">${data.hits[0].recipe.label}</p>
// 				<p class="dish-calories">${data.hits[0].recipe.calories}</p>
// 				<p class="dish-prep">${data.hits[0].recipe.ingredientLines}</p>
// 				<a href="${data.hits[0].recipe.url}">See recipe</a>
// 			</div>
// 		</div>
// 	`
// }



