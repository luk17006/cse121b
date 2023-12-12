// Function to fetch JSON data from the file
async function fetchGameData() {
    try {
        const response = await fetch("games.json");

        if (!response.ok) {
            throw new Error("Failed to fetch game data");
        }

        const gameData = await response.json();

        // Sort game data alphabetically by title
        gameData.sort((game1, game2) => game1.Title.localeCompare(game2.Title));

        return gameData;
    } catch (error) {
        console.error(error.message);
    }
}

// Function to populate the dropdowns with game titles and set up event listeners
async function populateDropdowns() {
    const gameData = await fetchGameData();

    const gameSelector = document.getElementById("gameSelector");
    const compareGameSelector = document.getElementById("compareGameSelector");

    // Clear existing options for both dropdowns
    gameSelector.innerHTML = "";
    compareGameSelector.innerHTML = "";

    // Populate dropdowns with game titles
    gameData.forEach((game) => {
        const optionForGame = document.createElement("option");
        const optionForCompareGame = document.createElement("option");

        optionForGame.text = game.Title;
        optionForGame.value = game.Date;

        optionForCompareGame.text = game.Title; // Use the same game titles for comparison dropdown
        optionForCompareGame.value = game.Date;

        gameSelector.appendChild(optionForGame);
        compareGameSelector.appendChild(optionForCompareGame);
    });

    // Add change event listener to update details for the first dropdown
    gameSelector.addEventListener("change", () => {
        updateDetails(gameSelector.value, gameData);
    });

    // Add change event listener to update details for the second dropdown
    compareGameSelector.addEventListener("change", () => {
        updateCompareDetails(compareGameSelector.value, gameData);
    });

    // Add event listener for DOM content loaded and update details initially for the first dropdown
    document.addEventListener("DOMContentLoaded", () => {
        updateDetails(gameSelector.value, gameData);
    });

    // Add event listener for DOM content loaded and update details initially for the second dropdown
    document.addEventListener("DOMContentLoaded", () => {
        updateCompareDetails(compareGameSelector.value, gameData);
    });
}

// Function to update details based on selected game
function updateDetails(selectedDate, gameData) {
    const selectedGame = gameData.find(game => game.Date === selectedDate);
    if (!selectedGame) {
        // No game found, clear details
        document.getElementById("gameDetails").textContent = "Game details will be displayed here.";
        return;
    }

    // Format the release date based on the day being "00"
    const formattedReleaseDate = selectedGame.Date.replace(/\/00/g, '');

    // Update game details text with formatted release date and console
    const gameDetailsElement = document.getElementById("gameDetails");
    gameDetailsElement.textContent = `${selectedGame.Title} details: Release Date - ${formattedReleaseDate}, Console - ${selectedGame.Console}`;
    
    // Additional code for release date and console
    const releaseDateElement = document.getElementById("releaseDate");
    const consoleElement = document.getElementById("console");

    releaseDateElement.textContent = `Release Date: ${formattedReleaseDate}`;
    consoleElement.textContent = `Console: ${selectedGame.Console}`;
}

// Function to update details based on selected game for the second dropdown
function updateCompareDetails(selectedDate, gameData) {
    const selectedGame = gameData.find(game => game.Date === selectedDate);
    if (!selectedGame) {
        // No game found, clear details
        document.getElementById("compareGameDetails").textContent = "Game details will be displayed here.";
        return;
    }

    // Format the release date based on the day being "00"
    const formattedReleaseDate = selectedGame.Date.replace(/\/00/g, '');

    // Update game details text with formatted release date and console for the second dropdown
    const compareGameDetailsElement = document.getElementById("compareGameDetails");
    compareGameDetailsElement.textContent = `${selectedGame.Title} details: Release Date - ${formattedReleaseDate}, Console - ${selectedGame.Console}`;
    
    // Additional code for release date and console for the second dropdown
    const compareReleaseDateElement = document.getElementById("compareReleaseDate");
    const compareConsoleElement = document.getElementById("compareConsole");

    compareReleaseDateElement.textContent = `Release Date: ${formattedReleaseDate}`;
    compareConsoleElement.textContent = `Console: ${selectedGame.Console}`;
}

// Initialize the application
populateDropdowns();

// Function to handle comparison button click
document.getElementById("compareButton").addEventListener("click", () => {
    compareGames();
});

// Function to calculate and display time differences
function compareGames() {
    const gameSelector = document.getElementById("gameSelector");
    const compareGameSelector = document.getElementById("compareGameSelector");

    const selectedGameDate = gameSelector.value;
    const compareGameDate = compareGameSelector.value;

    const selectedGameReleaseDate = new Date(selectedGameDate);
    const compareGameReleaseDate = new Date(compareGameDate);

    const timeSinceGame1 = calculateTimeDifference(selectedGameReleaseDate);
    const timeSinceGame2 = calculateTimeDifference(compareGameReleaseDate);
    const timeBetweenGames = calculateTimeDifferenceBetweenGames(selectedGameReleaseDate, compareGameReleaseDate);

    // Display results on the page
    document.getElementById("timeSinceGame1").textContent = `Time since ${gameSelector.options[gameSelector.selectedIndex].text} released: ${timeSinceGame1}`;
    document.getElementById("timeSinceGame2").textContent = `Time since ${compareGameSelector.options[compareGameSelector.selectedIndex].text} released: ${timeSinceGame2}`;
    document.getElementById("timeBetweenGames").textContent = `Time between the two games: ${timeBetweenGames}`;
}

// Function to calculate time difference between two dates
function calculateTimeDifference(date) {
    const now = new Date();
    const diff = now - date;

    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsInYear = 365.25 * millisecondsInDay; // accounting for leap years

    const years = Math.floor(diff / millisecondsInYear);
    const months = Math.floor((diff % millisecondsInYear) / (30 * millisecondsInDay));
    const days = Math.floor((diff % (30 * millisecondsInDay)) / millisecondsInDay);

    return `${years} years, ${months} months, ${days} days`;
}

// Function to calculate time difference between two games' release dates
function calculateTimeDifferenceBetweenGames(date1, date2) {
    const diff = Math.abs(date2 - date1);

    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsInYear = 365.25 * millisecondsInDay; // accounting for leap years

    const years = Math.floor(diff / millisecondsInYear);
    const months = Math.floor((diff % millisecondsInYear) / (30 * millisecondsInDay));
    const days = Math.floor((diff % (30 * millisecondsInDay)) / millisecondsInDay);

    return `${years} years, ${months} months, ${days} days`;
}
