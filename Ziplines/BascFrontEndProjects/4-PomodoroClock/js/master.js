var clockIsRunning = false;
var sessionNow = true;
var sessionNames = ['Break', 'Session'];
var breakLength = 5;
var sessionLength = 25;
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

  $("#break-minus").click(function() {
    console.log("cococo");
    breakLength = breakLength <= 0 ? 0 : breakLength - 1;
    console.log(breakLength);
    $(".break-value").html(breakLength);
  });
  $("#break-plus").click(function() {
    breakLength = breakLength >= 1440 ? 1440 : breakLength + 1;
    $(".break-value").html(breakLength);
  });
  $("#session-minus").click(function() {
    sessionLength = sessionLength <= 0 ? 0 : sessionLength - 1;
    $(".session-value").html(sessionLength);
  });
  $("#session-plus").click(function() {
    sessionLength = sessionLength >= 1440 ? 1440 : sessionLength + 1;
    $(".session-value").html(sessionLength);
  });

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
