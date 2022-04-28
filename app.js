// import functions and grab DOM elements
const climateSelect = document.getElementById('climate-select');
const climateDiv = document.getElementById('climate');
const knownForSelect = document.getElementById('known-for-select');
const knownForDiv = document.getElementById('known-for');
const countEl = document.getElementById('count');
// let state
let climateCount = 0;
let knownForCount = 0;

// set event listeners 
climateSelect.addEventListener('change', () => {
    console.log('changing climate', climateSelect.value);
    climateCount++;
    climateDiv.style.background = `url('./assets/${climateSelect.value}.jpg')`;
    displayStats();

});
knownForSelect.addEventListener('change', () => {
    console.log('changing known for', knownForSelect.value);
    knownForCount++;
    knownForDiv.style.background = `url('./assets/${climateSelect.value}.jpg')`;
    displayStats();

 });

function displayStats() {
    countEl.textContent = `You have changed the climate ${climateCount} and what the city is known for ${knownForCount} times.`;

}