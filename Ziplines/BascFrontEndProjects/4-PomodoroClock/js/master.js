var clockIsRunning = false;
var sessionNow = true;
var sessionNames = ['Break', 'Session'];
var brkSessArr = [5, 25];
var pomoIntervalId, currentSeconds, hours, minutes, seconds;

function resetPom() {
  if (clockIsRunning) {
    stopTimer();
    clockIsRunning = false;
  }
  sessionNow = true;
  brkSessArr = [5, 25];
  currentSeconds = brkSessArr[Number(sessionNow)] * 60;
  console.log(currentSeconds);
  $(".break-value").html(brkSessArr[0]);
  $(".session-value").html(brkSessArr[1]);
  $(".period-name").html(sessionNames[Number(sessionNow)]);
  $(".timer-value").html(clockStyle(brkSessArr[Number(sessionNow)] * 60));
}

function clockStyle(secVal) {
  hrs = parseInt(secVal / 3600, 10);
  min = parseInt(secVal / 60, 10);
  sec = parseInt(secVal % 60, 10);
  hrs = hrs == 0 ? "" : hrs + ":";
  min = min < 10 ? "0" + min + ":" : min + ":";
  sec = sec < 10 ? "0" + sec : sec;
  return hrs + min + sec;
}

function startTimer() {
  pomoIntervalId = setInterval(decreaseTimer, 1000);
}

function stopTimer() {
  clearInterval(pomoIntervalId);
}

function decreaseTimer() {
  if (currentSeconds <= 0) {
    currentSeconds = sessionNow ? brkSessArr[0] * 60 : brkSessArr[1] * 60;
    sessionNow = !sessionNow;
    $(".period-name").html(sessionNames[Number(sessionNow)]);
  } else {
    currentSeconds--;
  }
  $(".timer-value").html(clockStyle(currentSeconds));
}

function buttonHandler(item) {
  var period = item.parent().attr("id");
  var arrPos = period == "break" ? 0 : 1;
  var adder = item.attr("class") == "minus" ? -1 : 1;
  if (clockIsRunning && sessionNow == arrPos) {
    stopTimer();
    clockIsRunning = false;
  }
  brkSessArr[arrPos] = brkSessArr[arrPos] + adder < 0 || brkSessArr[arrPos] + adder > 1440 ? brkSessArr[arrPos] : brkSessArr[arrPos] + adder;
  $("#" + period + "> span").html(brkSessArr[arrPos]);
  if (sessionNow == arrPos) {
    currentSeconds = brkSessArr[arrPos] * 60;
    $(".timer-value").html(clockStyle(currentSeconds));
  }
}

$(document).ready(function() {
  resetPom();

  $(".reset").click(function() {
    resetPom();
  });

  $(".alarm-counter > button").click(function() {
    buttonHandler($(this));
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
