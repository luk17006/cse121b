/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // HTML elements
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');
        
        // Add content and attrivutes to elements
        h3Element.textContent = temple.templeName;
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        //Append elements to article
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        //Append article to global templesElement
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (!response.ok) {
        throw new Error('Failed to fetch temple data');
    }

    const templesJson = await response.json();
    templeList = templesJson;

    // ChatGPT recommended some kind of try...catch method here but I didn't quite understand it so I did not implement it.
    displayTemples(templeList);
};

/* reset Function */

const reset = () => {
    templesElement.innerHTML = ' ';
};

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            break;
    }
};

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList)
});

getTemples();