//lists of the months in a year 
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


//lists of the days in a week
const weeks = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thur",
  "Fri",
  "Sat",
];

//create a dynamic date to represent today
const date = new Date();

const weekDays = document.querySelector(".weekdays");
const monthDays = document.querySelector(".days");


document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

//displaying the day names (sun, mon, tue, ...)
let daysName = "";

for (let i = 0; i < weeks.length; i++) {
  daysName += `<div>${weeks[i]}</div>`
}
weekDays.innerHTML = daysName;


//function to display date
const renderCalendar = () => {
  
  //get the last day of the current month
  const currentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  )
  
  //get the last day of the previous mont
  const prevMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  )
  
  //count days left till month ends
  const nextDays = 7 - (currentMonth.getDay() + 1);
  
  //count days remaining till month start
  const prevDays = prevMonth.getDate() - prevMonth.getDay();
  
  
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = date.toDateString();



  let days = "";
  
  //write last days of previous month
  for (let x = prevDays; x <= prevMonth.getDate(); x++) {
    days += `<div class="prev-date">${x}</div>`;
  }

  //write the days of the current month
  for (let i = 1; i <= currentMonth.getDate(); i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
  
  //write first days of the following month
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  monthDays.innerHTML = days;
};


renderCalendar();

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
