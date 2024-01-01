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
let userInput = document.getElementById('textarea');
localStorage.setItem('input', JSON.stringify(userInput));

// To retrieve the value from localStorage:
let storedInput = localStorage.getItem('input');
let parsedInput = JSON.parse(storedInput);

console.log(userInput);

const save = () => {
  const input = userInput;
  localStorage.setItem('input', JSON.stringify(input));

 
}

save();


saveBtn.addEventListener("click", save);

// ( also save the time! as an object)






const hourArr = querySelectorAll('.time-block')

for (let i=0; i< hoursArr.length; i++) {

}



const hoursArr = document.querySelectorAll('.time-block')

const now = dayjs().format('H')

// color code the squares - done

for (let i = 0; i < hoursArr.length; i++){
    const hour = hoursArr[i].id.substring(5)

    if(now === hour){
        hoursArr[i].setAttribute('class', 'row time-block present')
    }
}

// save data to local storage - done

const buttonArr = document.querySelectorAll('button')
const textAreaArr = document.querySelectorAll('.description')

for (let i = 0; i < buttonArr.length; i++){
    const clickHandler = () => {
        const text = textAreaArr[i].value;
        localStorage.setItem(i, text)

    }

    buttonArr[i].addEventListener('click', clickHandler)
}


// get data from local storage

// loop

// localStorage.getItem()

//textAreaArr[i].value = whatever came back from local