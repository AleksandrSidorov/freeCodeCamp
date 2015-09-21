var clockIsRunning = false;
var sessionNow = true;
var sessionNames = ['Break', 'Session'];
var sessionBackground = ['#86BA90', '#DE291C'];
var sessionIcon = ['fa fa-play', 'fa fa-pause'];
var brkSessArr = [];
var pomoIntervalId, currentSeconds, hours, minutes, seconds, upNumber, fillPercent;

function resetPom() {
  if (clockIsRunning) {
    stopTimer();
    clockIsRunning = false;
  }
  sessionNow = true;
  brkSessArr = [5, 25];
  currentSeconds = brkSessArr[Number(sessionNow)] * 60;
  $(".break-value").html(brkSessArr[0]);
  $(".session-value").html(brkSessArr[1]);
  setIconStyle();
  $(".period-name").html(sessionNames[Number(sessionNow)]);
  $(".timer-value").html(clockStyle(brkSessArr[Number(sessionNow)] * 60));
  $(".clock-filler").css("background", "" + sessionBackground[Number(sessionNow)]);
  setClockFiller();
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

function setIconStyle() {
  $("#play-icon").removeClass().addClass(sessionIcon[Number(clockIsRunning)]);
}

function startTimer() {
  pomoIntervalId = setInterval(decreaseTimer, 1000);
}

function stopTimer() {
  clearInterval(pomoIntervalId);
}

function decreaseTimer() {
  if (currentSeconds <= 0) {
    sessionNow = !sessionNow;
    currentSeconds = brkSessArr[Number(sessionNow)] * 60;
    $(".period-name").html(sessionNames[Number(sessionNow)]);
  } else {
    currentSeconds--;
  }
  setClockFiller();
  $(".timer-value").html(clockStyle(currentSeconds));
}

function setClockFiller() {
  upNumber = brkSessArr[Number(sessionNow)] * 60;
  fillPercent = upNumber === 0 ? 0 : Math.round((upNumber - currentSeconds) / upNumber * 100);
  $(".clock-filler").css("height", fillPercent + "%");
  $(".clock-filler").css("background", sessionBackground[Number(sessionNow)]);

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
  $("#" + period + "> div > span").html(brkSessArr[arrPos]);
  if (sessionNow == arrPos) {
    currentSeconds = brkSessArr[arrPos] * 60;
    $(".timer-value").html(clockStyle(currentSeconds));
  }
  setIconStyle();
  setClockFiller();
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
      setIconStyle();
    } else {
      startTimer();
      clockIsRunning = true;
      setIconStyle();
    };
  });
});
