const inputs = document.querySelectorAll('input');


const messages = {
    day: {
        valueMissing: "Insert a day",
        rangeOverflow: "Must be a valid day",
        rangeUnderflow: "Must be a valid day"
    },
    month: {
        valueMissing: "Insert a month",
        rangeOverflow: "Must be a valid month",
        rangeUnderflow: "Must be a valid month"
    },
    year: {
        valueMissing: "Insert a year"
    }
}


const typesOfError = [
    'valueMissing',
    'rangeOverflow',
    'rangeUnderflow'
]


inputs.forEach((input)=>{
    input.addEventListener('input', () => validForm(input));
    input.addEventListener('invalid', e => e.preventDefault());
})


function validForm(input) {
    
    let message = "";
    input.style.borderColor = "";
    input.style.outline = "";
    input.parentNode.style.color = "";

    typesOfError.forEach((erro) => {
        if (input.validity[erro]) {
            message = messages[input.name][erro]
            input.style.borderColor = "hsl(0, 100%, 67%)";
            input.style.outline = "hsl(0, 100%, 67%)"
            input.parentNode.style.color = "hsl(0, 100%, 67%)";

            console.log(message);
        }
    })

    const messageError = input.parentNode.querySelector('.error');
    messageError.textContent = message;
}