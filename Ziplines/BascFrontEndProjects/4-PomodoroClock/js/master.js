var clockIsRunning = false;
var sessionNow = true;
var sessionNames = ['Break', 'Session'];
var breakLength = 5;
var sessionLength = 25;

$(document).ready(function() {
  $(".break-value").html(breakLength);
  $(".session-value").html(sessionLength);
  console.log(sessionNames[Number(sessionNow)]);
  $(".period-name").html(sessionNames[Number(sessionNow)]);
  $(".timer-value").html(sessionLength);
});
