var clockIsRunning = false;
var sessionNow = true;
var sessionNames = ['Break', 'Session'];
var breakLength = 1;
var sessionLength = 1;
var pomoIntervalId;
var currentSeconds, hours, minutes, seconds;

function startTimer() {
  pomoIntervalId = setInterval(decreaseTimer, 1000);
}

function decreaseTimer() {
  if (currentSeconds <= 0) {
    currentSeconds = sessionNow ? breakLength * 60 : sessionLength * 60;
    sessionNow = !sessionNow;
    $(".period-name").html(sessionNames[Number(sessionNow)]);
  }
  currentSeconds--;
  hours = parseInt(currentSeconds / 3600, 10);
  minutes = parseInt(currentSeconds / 60, 10);
  seconds = parseInt(currentSeconds % 60, 10);
  hours = hours == 0 ? "" : hours + ":";
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  $(".timer-value").html(hours + minutes + ":" + seconds);
  console.log("tick");
}

function stopTimer() {
  clearInterval(pomoIntervalId);
}

$(document).ready(function() {
  currentSeconds = sessionNow ? sessionLength * 60 : breakLength * 60;
  $(".break-value").html(breakLength);
  $(".session-value").html(sessionLength);
  $(".period-name").html(sessionNames[Number(sessionNow)]);
  $(".timer-value").html(sessionLength + ":00");
  $(".clock").click(function() {
    if (clockIsRunning) {
      stopTimer();
      clockIsRunning = false;
    } else {
      startTimer();
      clockIsRunning = true;
    };
  });
});
