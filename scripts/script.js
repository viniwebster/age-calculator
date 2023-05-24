import './formValidator.js'

//HTML elements
const dayInput = document.getElementById('day');
const monthsInput = document.getElementById('month');
const yearsInput = document.getElementById('year');
const button = document.getElementById('button');

//date
const data = new Date();
const currentYear = data.getFullYear();
const currentMonth = data.getMonth() + 1;
const currentDay = data.getUTCDate();


button.addEventListener('click', ()=>{
    
    const daysPassed = dateFns.differenceInDays(
        new Date(currentYear, currentMonth, currentDay),
        new Date(yearsInput.value, monthsInput.value, dayInput.value)
    );
    
    const monthsPassed = dateFns.differenceInMonths(new Date(currentYear, currentMonth, currentDay), 
    new Date(yearsInput.value, monthsInput.value, dayInput.value));

    /* const yearsPassed = dateFns.differenceInYears(new Date(currentYear, currentMonth, currentDay), 
    new Date(yearsInput.value, monthsInput.value, dayInput.value)); */
   
    const days = Math.floor(daysPassed % 30.4375);
    const months = Math.floor(monthsPassed % 12);
    const years = Math.floor(monthsPassed / 12)

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