function parseQuote(response) {
  document.getElementById('quote').innerHTML = response.quoteText;
  document.getElementById('author').innerHTML = response.quoteAuthor;
}

function getQuote() {
  var apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote';
  var getScript = document.createElement('script');
  getScript.src = apiUrl;
  document.body.appendChild(getScript);
}
