const submitButton = document.querySelector('.submit-button');
const restaurantDescription = document.querySelectorAll('.restaurant-description')[0]; 
const restaurantName = document.querySelector('.restaurant-name');
const span = document.createElement('span');
const imgParent = document.querySelectorAll('.img')[0];
const img = document.createElement('img');



// Async function to get the data from the JSON file
async function getData() {
    const response = await fetch('../data/restaurants.json');
    const data = await response.json();
    const random = Math.floor(Math.random() * Math.floor(data.length));
    const randomRestaurant = data[random];
    console.log(randomRestaurant);

    restaurantName.textContent = randomRestaurant.name;
    span.textContent = 'Sit Down?';
    restaurantDescription.appendChild(span);
    if ( randomRestaurant.sitDown ) {
        span.className = 'sitdown-true';
    } else {
        span.className = 'sitdown-false';
    }

    img.setAttribute("src", randomRestaurant.logo);
    img.setAttribute("alt", randomRestaurant.name);
    img.setAttribute("width", 480);
    imgParent.appendChild(img);

}

submitButton.addEventListener('click', () => {
    getData();
});