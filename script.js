// display todays date
let currentDay = dayjs();

console.log(currentDay);

const currentDay = document.getElementById("currentDay");
const paragraph = document.createElement("p");
paragraph.textContent = "This is some text from the console.";
currentDay.appendChild(paragraph);


const myDiv = document.getElementById("myDiv");

// Step 2: Create a new element
const paragraph = document.createElement("p");
paragraph.textContent = "This is some text from the console.";

// Step 3: Append the element to the selected element
myDiv.appendChild(paragraph);


//dayjs prob use now and format (read the docs)
//get todays date in the right format and save to a variable
//console.log that variable
//append to page
        //create an element
        //set inner text to that vairable i just made
        //append that to the currentDay div

//use dayjs to get the curret hour and store it in a variable
// day.js() hour()

// const divs =document.querySelectorAll(`.py-3`) //this is an array
// console.log(divs)
// for loop
    //get inner test from each div
    //compare that to the current hour (if statement)
        //if inner text is less than current hour
        //.setAttribute('class', 'row time block past')
        //if inner text is equal to than current hour
        //.setAttribute('class', row time-block present')
        //...

    //save things in localstorage
    //get value from text input
    //save to local storage ( also save the time! as an object)






