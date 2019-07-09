const submitButton = document.querySelector('.submit-button');
const restaurantDescription = document.querySelector('.restaurant-description'); 
const restaurantName = document.querySelector('.restaurant-name');


// Async function to get the data from the JSON file
async function getData() {
    const response = await fetch('../data/restaurants.json');
    const data = await response.json();
    const random = Math.floor(Math.random() * Math.floor(data.length));
    const randomRestaurant = data[random];
    console.log(randomRestaurant);

    restaurantName.textContent = randomRestaurant.name;
}

submitButton.addEventListener('click', () => {
    getData();
});