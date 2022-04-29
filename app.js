// import functions and grab DOM elements
const climateSelect = document.getElementById('climate-select');
const climateDiv = document.getElementById('climate');
const knownForSelect = document.getElementById('known-for-select');
const knownForDiv = document.getElementById('known-for');
const activitiesSelect = document.getElementById('activities-select');
const activitiesDiv = document.getElementById('activities');
const countEl = document.getElementById('count');
const sloganEl = document.getElementById('slogans');
const sloganInput = document.getElementById('user-input');
const sloganButton = document.getElementById('button');

// let state
let climateCount = 0;
let knownForCount = 0;
let activitiesCount = 0;

let slogans = [];

// set event listeners 
climateSelect.addEventListener('change', () => {
    console.log('changing climate', climateSelect.value);
    climateCount++;
    climateDiv.style.backgroundImage = `url('./assets/${climateSelect.value}.jpg')`;
    displayStats();

});
knownForSelect.addEventListener('change', () => {
    console.log('changing known for', knownForSelect.value);
    knownForCount++;
    knownForDiv.style.backgroundImage = `url('./assets/${knownForSelect.value}.jpg')`;
    displayStats();

});
activitiesSelect.addEventListener('change', () => {
    console.log('changing activities to', activitiesSelect.value);
    activitiesCount++;
    activitiesDiv.style.backgroundImage = `url('./assets/${activitiesSelect.value}.jpg')`;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    console.log(sloganInput.value);
    slogans.push(sloganInput.value);
    sloganInput.value = '';
    displayCatchphrases();

});

function displayStats() {
    countEl.textContent = `You have changed the climate ${climateCount} time(s)! You changed what the city is known for ${knownForCount} time(s)! You changed fun activities ${activitiesCount} time(s)!`;
}

function displayCatchphrases() {
    sloganEl.textContent = '';
    for (let sloganText of slogans) {
        console.log(slogans);
        const phrase = document.createElement('div');
        phrase.textContent = sloganText;
        sloganEl.append(phrase);
    }
}
