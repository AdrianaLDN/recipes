// console.log('i love you, you know?');

const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '75a99eb0ccmshe89a76bd5d451e7p14f6c5jsn7b5b3f0eb065',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}