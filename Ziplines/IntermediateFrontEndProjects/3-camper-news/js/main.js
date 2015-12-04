function getNews() {
  var urlFccApi = "http://www.freecodecamp.com/news/hot";
  var urlFcc = "http://www.freecodecamp.com/";
  $.getJSON( urlFccApi, function( data ) {
    var items = [];
    $.each(data, function(index, entry) {
      var newsDate = new Date(entry.timePosted);
      items.push( "<div id='the-news'><img src='" + entry.author.picture + "'><div id='inner-box'><a href='" + entry.link + "' target='_blank'>" + entry.headline + "</a><p>By: <a href='" + urlFcc + entry.author.username + "' target='_blank'>" + entry.author.username + "</a></p><div id='stats'><span><i class='fa fa-heart-o'></i> " + entry.upVotes.length + "</span><span>" + getTimeDiff(newsDate) + "</span></div></div></div>" );
    });

    $("#news-list").html( items.join("") );
  });
}

function getTimeDiff(newsDate) {
  var curDate = new Date();
  var diffDate = curDate - newsDate;

  var diffMins = diffDate / (1000 * 60);
  console.log("Mins: " + diffMins);

  var diffHours = diffMins / 60;
  console.log("Hours: " + diffHours);

  var diffDays = diffHours / 24;
  console.log("Days: " + diffDays);

  var diffMonths = diffDays / 30;
  console.log("Months: " + diffMonths);

  var diffYears = diffDays / 365;
  console.log("Years: " + diffYears);

  if (Math.trunc(diffYears) > 0) return Math.trunc(diffYears) + "y"
  else if (Math.trunc(diffDays) > 0) return Math.trunc(diffDays) + "d"
  else if (Math.trunc(diffHours) > 0) return Math.trunc(diffHours) + "h"
  else return Math.trunc(diffMins) + "m"
}

$(document).ready(function() {
  getNews();
});
