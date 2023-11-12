/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Nathan Luke';
let currentYear = '2023';
let profilePicture = 'images/mugshot.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const favoriteFoods = ['Pho', 'Baked Chicken Drumbsticks', 'Applewood Smoked Salmon with Fresh Mango Salsa', 'Fish Tacos'];

foodElement.innerHTML += `<br>${favoriteFoods}`;

let moreFood = 'Indian Butter Chicken';
favoriteFoods.push(moreFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;