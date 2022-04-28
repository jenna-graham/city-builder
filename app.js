// import functions and grab DOM elements
const climateSelect = document.getElementById('climate-select');
const climateDiv = document.getElementById('climate');
const countEl = document.getElementById('count');








// let state
let climateCount = 0;

// set event listeners 
climateSelect.addEventListener('change', () => {
    console.log('changing climate', climateSelect.value);
    climateCount++;
    climateDiv.style.background = `url('./assets/${climateSelect.value}.jpg')`;
    displayStats();

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function displayStats() {
    countEl.textContent = `You have changed the climate ${climateCount} times.`;


}