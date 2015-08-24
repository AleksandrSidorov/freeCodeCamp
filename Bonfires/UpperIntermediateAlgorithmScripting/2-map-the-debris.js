/*
Return a new array that transforms the element's average altitude into their
orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being
orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth
is 398600.4418

Here are some helpful links:
Math.pow()
*/

function orbitalPeriod(arr) {
  var result = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (var i = 0; i < arr.length; i++) {
    var a3 = Math.pow(earthRadius + arr[i].avgAlt, 3);
    var myPeriod = 2 * Math.PI * Math.sqrt(a3 / GM);
    var objDebis = {name: arr[i].name, orbitalPeriod: Math.round(myPeriod)};
    result.push(objDebis);
  }
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
