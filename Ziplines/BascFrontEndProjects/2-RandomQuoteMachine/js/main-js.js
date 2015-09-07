function parseQuote(response) {
  document.getElementById('quote').innerHTML = response.quoteText;
  document.getElementById('author').innerHTML = response.quoteAuthor;
}

function getQuote() {
  var apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en';
  var request = new XMLHttpRequest;
  request.open('POST', apiUrl, true);
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if(request.status == 200) {
        parseQuote(responseText);
      }
    }
  };
  request.send();
}
