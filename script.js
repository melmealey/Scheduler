// display todays date
let date = dayjs().format('MMMM-DD-YYYY');
console.log(date);

let currentDay = document.getElementById('currentDay');

let paragraph = document.createElement("p");
paragraph.innerText = date;
currentDay.appendChild(paragraph);

let currentHour = dayjs().format('hA');
console.log(currentHour);


const hours = ['1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12PM'];

console.log (hours);

function checkHour() {
  for (let i = 0; i < hours.length; i++) {
 
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

checkHour ();

// function makePlans() {

//     $(".hour").each(function() {
//         var currHour = $(this).text();
//         var currPlan = localStorage.getItem(currHour);

//         // console.log(this);

//         if(currPlan !== null) {
//             $(this).siblings(".plan").val(currPlan);
//         }
//     });
// }

 //grabs values from time and value divs and saves them to local storage
//  $(".saveBtn").click(function (event) {
//     event.preventDefault();
//     var value = $(this).siblings(".time-block").val();
//     var time = $(this).parent().attr("id").split("-")[1];
//     localStorage.setItem(time, value);
//   });

//   //retrieves items from local storage and sets them in proper places
//   $("#hour-09 .time-block").val(localStorage.getItem("09"));
//   $("#hour-10 .time-block").val(localStorage.getItem("10"));
//   $("#hour-11 .time-block").val(localStorage.getItem("11"));
//   $("#hour-12 .time-block").val(localStorage.getItem("12"));
//   $("#hour-13 .time-block").val(localStorage.getItem("13"));
//   $("#hour-14 .time-block").val(localStorage.getItem("14"));
//   $("#hour-15 .time-block").val(localStorage.getItem("15"));
//   $("#hour-16 .time-block").val(localStorage.getItem("16"));
//   $("#hour-17 .time-block").val(localStorage.getItem("17"));
// });

// makePlans();

// const data = {};
// const dataString = JSON.stringify(data);
// localStorage.setItem("userData", dataString);

// const storedDataString = localStorage.getItem("userData");
// const storedData = JSON.parse(storedDataString);
// console.log(storedData);


//     save things in localstorage
//     get value from text input
//     save to local storage ( also save the time! as an object)






