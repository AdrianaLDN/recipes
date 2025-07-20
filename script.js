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

	// const response = await fetch(`https://api.edamam.com/search?app_id=${appID}&app_key=${appKey}&q=${(dishName)}`);
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${dishName}&app_id=${appID}&app_key=${appKey}`);
    
	// console.log(response);

	const data = await response.json();
	console.log(data);

	useApiData(data);
}



function useApiData(data) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = ""; // Clear previous content

    // Loop through the first 11 hits or the entire array if it has less than 11 items
    for (let i = 0; i < Math.min(data.hits.length, 11); i++) {
		
        const recipe = data.hits[i].recipe;

		//Round calories to nearest integer
        const roundedCalories = Math.round(recipe.calories);

        const recipeHtml = `
            <div class="dish">
                <img src="${recipe.image}" class="dish-image">
                <div class="dish-text">
                    <p class="dish-name">${recipe.label}</p>
                    <p>Calories: ${roundedCalories}</p>
                    <p>Wellness Wonderland:  <b>${recipe.dietLabels}</b></p>
                    
                    <a class="dish-recipe" href="${recipe.url}" target="_blank">See recipe</a>
                </div>
            </div>
        `;

        //<p>${recipe.ingredientLines}</p>

        // Append recipe HTML to container
        recipesContainer.innerHTML += recipeHtml;
    }
}




