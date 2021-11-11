//today's date
var todayDate = moment().format('ddd, MMM do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".text").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
    function timeTracker () {
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            // Checking time past - future - present
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
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
        $("#1hour.text").val(localStorage.getItem("1hour"));
        $("#2hour.text").val(localStorage.getItem("2hour"));
        $("#3hour.text").val(localStorage.getItem("3hour"));
        $("#4hour.text").val(localStorage.getItem("4hour"));
        $("#5hour.text").val(localStorage.getItem("5hour"));

    timeTracker();
})