/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Nathan Luke",
    photo: 'images/mugshot.png',
    favoriteFoods: ['Pho', 'Baked Chicken Drumbsticks', 'Applewood Smoked Salmon with Fresh Mango Salsa', 'Fish Tacos'],
    hobbies: ['Piano', 'Writing', 'Gaming and Gaming History'],
    placesLived: [],
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: ['Yakima, WA', 'Sandy, UT', 'Rexburg, ID'],
        length: ['22 years', '2 years', '2 years']
    }
);

/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;

/* Name */

document.querySelector('#photo').alt = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach (food => {
    let li = document.createElement ('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild (li);
});

/* Hobbies List */

myProfile.favoriteFoods.forEach (food => {
    let li = document.createElement ('li');
    li.textContent = food;
    document.querySelector('#hobbies').appendChild (li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place.join(' - ');

    let dd = document.createElement('dd');
    dd.textContent = place.length.join(' - ');

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
