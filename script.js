// display todays date
let date = dayjs().format('MMMM-DD-YYYY');
console.log(date);

let currentDay = document.getElementById('currentDay');

let paragraph = document.createElement("p");
paragraph.innerText = date;
currentDay.appendChild(paragraph);


//use dayjs to get the current hour and store it in a variable
let currentHour = dayjs().format('h A');
console.log(currentHour);

let now = currentHour
let timeBlock = workingHours

if (timeBlock < now) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
}

// Define the start and end times for working hours
const startHour = dayjs().hour(9).minute(0).second(0);
const endHour = dayjs().hour(17).minute(0).second(0);

// Check if the current time is within working hours
if (dayjs().isBetween(startHour, endHour)) {
  // Current time is within working hours
  console.log("Current time is within working hours");
} else {
  // Current time is outside working hours
  console.log("Current time is outside working hours");
}


// const divs =document.querySelectorAll(`.py-3`) //this is an array
// console.log(divs)
// for loop
//     get inner test from each div
//     compare that to the current hour (if statement)
//         if inner text is less than current hour
//         .setAttribute('class', 'row time block past')
//         if inner text is equal to than current hour
//         .setAttribute('class', row time-block present')
//         if inner text is more than the current hour
//         .setAttribute ('class', row time block future)


//                     // To check the time and add the classes for background indicators
//                     if (blockTime < timeNow) {
//                         $(this).removeClass("future");
//                         $(this).removeClass("present");
//                         $(this).addClass("past");
//                     }
//                     else if (blockTime === timeNow) {
//                         $(this).removeClass("past");
//                         $(this).removeClass("future");
//                         $(this).addClass("present");
//                     }
//                     else {
//                         $(this).removeClass("present");
//                         $(this).removeClass("past");
//                         $(this).addClass("future");

//                     }

//     save things in localstorage
//     get value from text input
//     save to local storage ( also save the time! as an object)






