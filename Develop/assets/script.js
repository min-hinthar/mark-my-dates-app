// import luxon from "https://cdnjs.cloudflare.com/ajax/libs/luxon/2.4.0/luxon.min.js";
// var dt = DateTime.fromISO(new Date().toISOString());
// var day = (dt.toFormat('EEEE, MMMM YYYY'));
// var time = (dt.toFormat('hh:mm a'));
// var currentTime = dt.toISO();
$(document).ready(function () {
    console.log("page loaded");
    var DateTime = luxon.DateTime;
    // THEN the current day is displayed at the top of the calendar
    var clockDisplay = document.getElementById('currentDay');
    console.log(clockDisplay);
    var currentTime = luxon.DateTime.local().toLocaleString(DateTime.DATETIME_FULL); //.toUpperCase();
// this.localDateTime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
    console.log(currentTime);
    clockDisplay.textContent = currentTime; 
$("#currentDay").html(currentTime);

// reset clock display to update every 1 seconds
let time = setInterval(clockReset, 1000);
function clockReset(){
    currentTime = clockDisplay.textContent;
}
//Document Ready Event: https://www.w3schools.com/jquery/jquery_syntax.asp
    // WHEN I click the save button for that time block
    // Use JQuery to select all saveBtn on click
    $('.saveBtn').on("click", function () {
        var hourId = $(this).parent().attr('id');
       let inputText=  $(this).siblings('.textSpace').val();
        //let inputText = $('.textSpace').val;
        localStorage.setItem(hourId, inputText)
    // assign events var as sibliing  attribute
    // var todo = $(this).siblings(".textSpace").val();
    // console.log(todo);
    // // assign hour var as parent attribute 
    // var hour = $(this).parent().attr("id");
    // localStorage.setItem(hour, todo);
    });
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
$("hour9 .textSpace").val(localStorage.getItem("hour9"));
$("hour10 .textSpace").val(localStorage.getItem("hour10"));
$("hour11 .textSpace").val(localStorage.getItem("hour11"));
$("hour12 .textSpace").val(localStorage.getItem("hour12"));
$("hour1 .textSpace").val(localStorage.getItem("hour1"));
$("hour2 .textSpace").val(localStorage.getItem("hour2"));
$("hour3 .textSpace").val(localStorage.getItem("hour3"));
$("hour4 .textSpace").val(localStorage.getItem("hour4"));
$("hour5 .textSpace").val(localStorage.getItem("hour5"));
// the values stored as setItem to hour.textSpace objects are retrieved upon reload

// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// for each row of the hour - find the present hour
$('.row').each(function() {
    var presentRow = parseInt($(this).attr('id').split('-')[1]);
    console.log(presentRow);
    // if present == addClass .present
    if (currentTime === presentRow) {
        $(this).addClass('.present')
        // else if > .past
    } else if (currentTime > presentRow) {
        $(this).addClass('.past')
    } else {
        $(this).addClass('.future')
    }
});
});

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day



