import './formValidator.js'

//HTML elements
const dayInput = document.getElementById('day');
const monthsInput = document.getElementById('month');
const yearsInput = document.getElementById('year');
const button = document.getElementById('button');


button.addEventListener('click', ()=>{

    let curretDate = new Date()
    const birthday = new Date(yearsInput.value, monthsInput.value -1, dayInput.value);
    const ageInMs = curretDate.getTime() - birthday.getTime();
    
    const ageInSeconds = ageInMs / 1000;
    const ageInMins = ageInSeconds / 60;
    const ageInHours = ageInMins / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.4375;
  
    const days = Math.floor(ageInDays % 30.4375);
    const months = Math.floor(ageInMonths % 12);
    const years = Math.floor(ageInMonths / 12)

    addInfos(years, months, days)
})


function addInfos(years, months, days) {
    
    const y = document.getElementById('years');
    const m = document.getElementById('months');
    const d = document.getElementById('days');

    y.textContent = years;
    m.textContent = months;
    d.textContent = days;

}
