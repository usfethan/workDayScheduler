//today's date
var todayDate = moment().format("dddd, MMM Do YY");
$("#currentDay").html(todayDate);

$(document).ready(function() {

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //saving text to localstorage
        localStorage.setItem(time, text);
    })
        // Reset button
    $(".clear").on("click", function (event) {
        event.preventDefault();    
        localStorage.clear();       // clear local storage
        location.reload();          
    });

    
    function timeTracker () {
        
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            // Checking blocktime < currentime  
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            // Checking blocktime ==== currentime
            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            //checking blocktime > currentime
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
        //getting item from local storage
        $("#hour8.text").val(localStorage.getItem("hour8"));
        $("#hour9.text").val(localStorage.getItem("hour9"));
        $("#hour10.text").val(localStorage.getItem("hour10"));
        $("#hour11.text").val(localStorage.getItem("hour11"));
        $("#hour12.text").val(localStorage.getItem("hour12"));
        $("#hour13.text").val(localStorage.getItem("hour13"));
        $("#hour14.text").val(localStorage.getItem("hour14"));
        $("#hour15.text").val(localStorage.getItem("hour15"));
        $("#hour16.text").val(localStorage.getItem("hour16"));
        $("#hour17.text").val(localStorage.getItem("hour17"));

    timeTracker();
})