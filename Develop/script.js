//today's date
var todayDate = moment().format("MMM Do YY");
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
        $("#8hour.text").val(localStorage.getItem("8hour"));
        $("#9hour.text").val(localStorage.getItem("9hour"));
        $("#10hour.text").val(localStorage.getItem("10hour"));
        $("#11hour.text").val(localStorage.getItem("11hour"));
        $("#12hour.text").val(localStorage.getItem("12hour"));
        $("#13hour.text").val(localStorage.getItem("13hour"));
        $("#14hour.text").val(localStorage.getItem("14hour"));
        $("#15hour.text").val(localStorage.getItem("15hour"));
        $("#16hour.text").val(localStorage.getItem("16hour"));
        $("#17hour.text").val(localStorage.getItem("17hour"));

    timeTracker();
})