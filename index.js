let year = new Date().getFullYear()
let christmas = new Date("Dec 25, 2023 00:00:01").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = christmas - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    function leadingZero(number) {
        return number >= 10 ? number : "0"+number
    };

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = '<span class="countdown">'+leadingZero(days)+'</span>';
    document.getElementById("hours").innerHTML = '<span class="countdown">'+leadingZero(hours)+'</span>';
    document.getElementById("minutes").innerHTML = '<span class="countdown">'+leadingZero(minutes)+'</span>';;
    document.getElementById("seconds").innerHTML = '<span class="countdown">'+leadingZero(seconds)+'</span>';
    let timeLeft = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    // }
}, 1000);