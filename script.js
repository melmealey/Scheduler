// display todays date
let date = dayjs().format('dddd, MMMM DD, YYYY');

let currentDay = document.getElementById('currentDay');

let paragraph = document.createElement("p");
paragraph.innerText = date;
currentDay.appendChild(paragraph);

//establish the current hour
let currentHour = dayjs().format('hA');
// console.log(currentHour)


let workHours = document.querySelectorAll(".time-block");

function checkHour() {
  for (let i = 0; i < workHours.length; i++) {
    // const hour = workHours[i].idsubstring (5)
    // if(now === hour) {
    //   workHours[i].setAttribute('class', 'row time-block present')
    // }
    let element = document.querySelectorAll('.time-block')[i];
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

checkHour();

// Enter data in hour blocks that will be saved to local storage

const saveButtons = document.querySelectorAll('button');
const userInput = document.querySelectorAll('.description');

for (let i = 0; i < saveButtons.length; i++) {
  const save = () => {
    const text = userInput[i].value;
    localStorage.setItem(i, text);
  };

  const retrieve = () => {
    const savedText = localStorage.getItem(i);
    userInput[i].value = savedText;
  };

  saveButtons[i].addEventListener('click', save);
  retrieve();
}

// const save = () => {
//   const input = userInput;
//   localStorage.setItem('input', JSON.stringify(input));

 
// }

// save();


// saveBtn.addEventListener("click", save);

// // ( also save the time! as an object)





