var ipLocatorUrl = 'http://ip-api.com/json';
var owmApiKey = 'a5fa6deab88fe51ae1f33c01dfe97ab2';
var owmUrl = 'http://api.openweathermap.org/data/2.5/weather?callback=?';
var fCountries = ['BS', 'BZ', 'KY', 'PW', 'US', 'PR', 'AS'];

$(document).ready(function() {
  $.ajax({
    url: ipLocatorUrl,
    success: function(response) {
      var useUnits = 'metric';
      if (fCountries.indexOf(response.countryCode) > 0) {
        useUnits = 'imperial';
      }
      $( "#location" ).html(response.city + ', ' + response.regionName);
      var ipCity = response.city;
      $.getJSON(owmUrl,
           {q: ipCity,
            type: 'like',
            units: useUnits,
            APPID: owmUrl})
       .done(parseWeather);
    },
    dataType: 'json',
    statusCode: {
      429: function() {
        alert( "Number of tries exceeded" );
      }
    }
  });
});

function parseWeather(data) {
  var dayTime = '-night-';
  if (data.dt >= data.sys.sunrise && data.dt < data.sys.sunset) {
    var dayTime = '-day-';
  }
  var owmIconClass = 'wi wi-owm' + dayTime + data.weather[0].id;
  var owmWindIconClass = 'wi wi-wind from-' + data.wind.deg + '-deg';
  $( "#owm-temp" ).html(data.main.temp);
  $( "#owm-icon" ).removeClass().addClass(owmIconClass);
  $( "#owm-description" ).html(data.weather[0].description);
  $( "#owm-wind-speed" ).html(data.wind.speed + ' m/s');
  $( "#owm-wind-icon" ).removeClass().addClass(owmWindIconClass);
  }
