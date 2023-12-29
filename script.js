// display todays date
let date = dayjs().format('dddd, MMMM DD, YYYY');

let currentDay = document.getElementById('currentDay');

let paragraph = document.createElement("p");
paragraph.innerText = date;
currentDay.appendChild(paragraph);

//establish the current hour
let currentHour = dayjs().format('hA');

const saveBtn = document.querySelector("#saveBtn");

let workHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",];

function checkHour() {
  for (let i = 0; i < workHours.length; i++) {

    let element = document.querySelectorAll('.py-3')[i];
    let parent = element.closest('.row');
    console.log(parent);
    console.log(element.innerText);
    console.log(currentHour);
    console.log(element.innerText === currentHour);

    if (element.innerText === currentHour) {
      parent.setAttribute('class', 'row time-block present');
    } else if (element.innerText > currentHour) {
      parent.setAttribute('class', 'row time-block future');
    } else if (element.innerText < currentHour) {
      parent.setAttribute('class', 'row time-block past');
    }
  }
}

checkHour();


// Enter data in hour blocks that will be saved to local storage
const userInput = document.querySelector('textarea');
localStorage.setItem('input', JSON.stringify(userInput.textContent));

// To retrieve the value from localStorage:
const storedInput = localStorage.getItem('input');
const parsedInput = JSON.parse(storedInput);

console.log(parsedInput)

function save() {
  const input = userInput.textContent;
  localStorage.setItem('input', JSON.stringify(input));
}

saveBtn.addEventListener("click", save);

save();

// ( also save the time! as an object)






