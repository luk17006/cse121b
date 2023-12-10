// Function to fetch JSON data from the file
async function fetchGameData() {
    try {
        const response = await fetch('games.json');

        if (!response.ok) {
            throw new Error('Failed to fetch game data');
        }

        const gameData = await response.json();
        return gameData;
    } catch (error) {
        console.error(error.message);
    }
}

// Function to populate the dropdowns with game titles
async function populateDropdowns() {
    const gameData = await fetchGameData();

    const game1Dropdown = document.getElementById('game1');
    const game2Dropdown = document.getElementById('game2');

    // Clear existing options
    game1Dropdown.innerHTML = '';
    game2Dropdown.innerHTML = '';

    // Populate dropdowns with game titles
    gameData.forEach((game) => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');

        option1.text = game.Title;
        option1.value = game.Date;

        option2.text = game.Title;
        option2.value = game.Date;

        game1Dropdown.add(option1);
        game2Dropdown.add(option2);
    });
}

// Function to compare dates and display results
function compareDates() {
    const game1Date = new Date(document.getElementById('game1').value);
    const game2Date = new Date(document.getElementById('game2').value);

    let comparisonResult = '';

    if (game1Date > game2Date) {
        comparisonResult = `${gameData[0].Title} was released later than ${gameData[1].Title}.`;
    } else if (game1Date < game2Date) {
        comparisonResult = `${gameData[1].Title} was released later than ${gameData[0].Title}.`;
    } else {
        comparisonResult = `Both games were released on the same date.`;
    }

    document.getElementById('comparisonResults').innerText = comparisonResult;
}

// Initial setup when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();
});
