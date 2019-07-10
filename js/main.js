const allButton = document.querySelector('.all-button');
const pickButton = document.querySelector('.pick-button');
const restaurantDescription = document.querySelectorAll('.restaurant-description')[0]; 
const restaurantName = document.querySelector('.restaurant-name');
const imgParent = document.querySelectorAll('.img')[0];

const ul = document.createElement('ul');
restaurantDescription.appendChild(ul);

// Create elements for pickForMe() 
const h3 = document.createElement('h3');
const span = document.createElement('span');
const img = document.createElement('img');

let showList = false;


// Async function to get the data from the JSON file
async function getData() {
    const response = await fetch('../data/restaurants.json');
    const data = await response.json();

    // Display all the restaurants in the JSON and hide it in the DOM
    listAll(data);
    ul.style.display = 'none';

    // Call the display all function to display a list of all the restaurants
    allButton.addEventListener('click', () => {
        if (!showList) {
            showList = true;
            allButton.textContent = "HIDE ALL RESTAURANTS";
            toggleListOn();
            
        } else {
            showList = false;
            allButton.textContent = "SHOW ALL RESTAURANTS";
            toggleListOff();
        }
        
    });

    // Call the random generator if the 'PICK RESTAURANT FOR ME' button is clicked
    pickButton.addEventListener('click', () => {
        pickForMe(data);
    });
}

// List all the restaurant names in the JSON
function listAll(data) {
    for (let i = 0; i < data.length; i ++) {
        // create <li> element inside loop so a new list item is created for each data item
        let li = document.createElement('li');
        li.textContent = data[i].name;
        ul.appendChild(li);
    }
}

function toggleListOn() {
    ul.style.display = 'block';
}

function toggleListOff() {
    ul.style.display = 'none';
}

// Generate a random number and pick the corresponding JSON index
function pickForMe(data) {
    const random = Math.floor(Math.random() * Math.floor(data.length));
    const randomRestaurant = data[random];
    console.log(randomRestaurant);

    // Return restaurant name
    h3.textContent = randomRestaurant.name;
    h3.className = "restaurant-name";
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