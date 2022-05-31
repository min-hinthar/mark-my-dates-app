// import luxon from "https://cdnjs.cloudflare.com/ajax/libs/luxon/2.4.0/luxon.min.js";
var DateTime = luxon.DateTime;
// var dt = DateTime.fromISO(new Date().toISOString());
// var day = (dt.toFormat('EEEE, MMMM YYYY'));
// var time = (dt.toFormat('hh:mm a'));
// var currentTime = dt.toISO();


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
function init(){
    // THEN the current day is displayed at the top of the calendar
}
var clockDisplay = document.getElementById('currentDay');
var currentTime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
// this.localDateTime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
console.log(currentTime);
clockDisplay.textContent = currentTime;
// $("#currentDay").html(currentTime);

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist