/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into
a more readable format.

The friendly display should use month names instead of numbers and ordinal
dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the
user: if the date range ends in less than a year from when it begins, do not
display the ending year.

Additionally, if the date range begins in the current year (i.e. it is
currently the year 2016) and ends within one year, the year should not be
displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending
year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"])
should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"])
should return ["July 1st, 2016", "July 4th, 2018"].
*/

function makeFriendlyDates(arr) {

  var result = [ '', '' ];
  var monthsNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var currYear = new Date().getFullYear();

  var date1 = new Date(arr[0]);
  var date2 = new Date(arr[1]);

  var withinYear = getDaysDiff (date1, date2) < 365;

  result[0] += monthsNames[date1.getMonth()] + ' ' + getOrdinal(date1.getDate());

  if (!(withinYear && date1.getFullYear() == currYear)) {
    result[0] += ', ' + date1.getFullYear();
  }

  if ( date1.getTime() == date2.getTime() ) {
    result.pop();
    return result;
  }

  if (date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth()) {
    result[1] += getOrdinal(date2.getDate());
  } else if (withinYear) {
    result[1] += monthsNames[date2.getMonth()] + ' ' + getOrdinal(date2.getDate());
  } else {
    result[1] += monthsNames[date2.getMonth()] + ' ' + getOrdinal(date2.getDate()) + ', ' + date2.getFullYear();
  }

  return result;
}

function getOrdinal(num) {
  var endings = [ 'th', 'st', 'nd', 'rd' ];
  return endings[ num ] ? '' + num + endings[ num ] : '' + num + 'th';
}

function getDaysDiff (date1, date2) {
  return Math.floor((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);
