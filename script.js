// display todays date
let date = dayjs().format('dddd, MMMM DD, YYYY');
let currentDay = document.getElementById('currentDay');
let paragraph = document.createElement("p");
paragraph.innerText = date;
currentDay.appendChild(paragraph);

// //establish the current hour
const currentHour = document.querySelectorAll('.time-block');
const now = dayjs();

for (let i = 0; i < currentHour.length; i++) {
  const hour = dayjs(currentHour[i].id.substring(5), 'H');

  if (now.isSame(hour, 'hour')) {
    currentHour[i].className = 'row time-block present';
  } else if (now.isAfter(hour, 'hour')) {
    currentHour[i].className = 'row time-block past';
  } else {
    currentHour[i].className = 'row time-block future';
  }
}

// Enter data in hour blocks that will be saved to local storage
const saveButtons = document.querySelectorAll('button');
const userInput = document.querySelectorAll('.description');

for (let i = 0; i < saveButtons.length; i++) {
  const save = () => {
    const text = userInput[i].value;
    localStorage.setItem(i, text);
  };

  // Retrieve from localStorage and display in the input fields when the page is loaded.
  const retrieve = () => {
    const savedText = localStorage.getItem(i);
    userInput[i].value = savedText;
  };

  saveButtons[i].addEventListener('click', save);
  retrieve();

}