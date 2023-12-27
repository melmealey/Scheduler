// display todays date
let date = dayjs().format('MMMM-DD-YYYY');
// console.log(date);

let currentDay = document.getElementById('currentDay');

let paragraph = document.createElement("p");
paragraph.innerText = date;
currentDay.appendChild(paragraph);

let currentHour = dayjs().format('hA');
// console.log(currentHour);


const hours = ['1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12PM'];

// console.log (hours);

function checkHour() {
  for (let i = 0; i < hours.length; i++) {
 
    let element = document.querySelectorAll('.py-3')[i];
    let parent = element.closest('.row');
    // console.log(parent);
    // console.log(element.innerText);
    // console.log(currentHour);
    // console.log(element.innerText === currentHour);

    if (element.innerText === currentHour) {
      parent.setAttribute('class', 'row time-block present');
    } else if (element.innerText > currentHour) {
      parent.setAttribute('class', 'row time-block future');
    } else if (element.innerText < currentHour) {
      parent.setAttribute('class', 'row time-block past');
    }
  }
}

checkHour ();

//Enter data in hour blocks that will be saved to local storage
function makePlans() {



}

// const userInput = document.querySelector ('textarea');
// localStorage.setItem ('input', JSON.stringify (userInput));

// let inputs = localStorage.getItem ('inputs');
// localStorage.getItem ('inputs', JSON.parse (userInput));


const userInput = document.querySelector('#textarea').value; 
const inputObject = { input: userInput };
localStorage.setItem('input', JSON.stringify(inputObject));

const storedInput = localStorage.getItem('input');
const parsedInput = JSON.parse(storedInput);

saveBtn.addEventListenr ('click',save)


//     save things in localstorage
//     get value from text input
//     save to local storage ( also save the time! as an object)






