const allButton = document.querySelector('.all-button');
const pickButton = document.querySelector('.pick-button');
const restaurantDescription = document.querySelectorAll('.restaurant-description')[0]; 
const restaurantName = document.querySelector('.restaurant-name');
const imgParent = document.querySelectorAll('.img')[0];

// Create elements for pickForMe() 
const h3 = document.createElement('h3');
const span = document.createElement('span');
const img = document.createElement('img');




// Async function to get the data from the JSON file
async function getData() {
    const response = await fetch('../data/restaurants.json');
    const data = await response.json();

    // Call the display all function to display a list of all the restaurants
    allButton.addEventListener('click', () => {
        listAll(data);
    })

    // Call the random generator if the 'PICK RESTAURANT FOR ME' button is clicked
    pickButton.addEventListener('click', () => {
        pickForMe(data);
    });
}

// List all the restaurant names in the JSON
function listAll(data) {

}

// Generate a random number and pick the corresponding JSON index
function pickForMe(data) {
    const random = Math.floor(Math.random() * Math.floor(data.length));
    const randomRestaurant = data[random];
    console.log(randomRestaurant);

    // Return restaurant name
    h3.textContent = randomRestaurant.name;
    restaurantDescription.appendChild(h3);

    // Set <span> element and append to parent(restaurantDescription)
    span.textContent = 'Sit Down?';
    restaurantDescription.appendChild(span);

    // Sit down logic
    if ( randomRestaurant.sitDown ) {
        span.className = 'sitdown-true';
    } else {
        span.className = 'sitdown-false';
    }

    // Add the corresponding image
    img.setAttribute("src", randomRestaurant.logo);
    img.setAttribute("alt", randomRestaurant.name);
    img.setAttribute("width", 480);
    imgParent.appendChild(img);
}


// Call Async funtion
getData();