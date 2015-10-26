function parseQuote(response) {
  var qText = response.quoteText;
  var qAuthor = response.quoteAuthor;
  document.getElementById('quote').innerHTML = qText;
  document.getElementById('author').innerHTML = qAuthor;
  var tLink = document.getElementById('myTwi');
  var tResultText = getTweetText(qText, qAuthor);
  tLink.setAttribute('href', tResultText);
}

function getTweetText(tText, tAuthor) {
  var tUrl = 'https://twitter.com/intent/tweet?text=';
  if (tAuthor === '') {
    tAuthor = 'Quote';
  };
  if ((tText + ' - ' + tAuthor).length <= 140) {
    return tUrl + tText + ' - ' + tAuthor;
  } else if (tText.length <=140) {
    return tUrl + tText;
  } else {
    return tUrl + 'Quote too large for Twitter.';
  }
}

function getQuote() {
  var scriptApi = document.createElement('script');
  scriptApi.src = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote';
  document.body.insertBefore(scriptApi, document.getElementsByName('title')[0]);
}

window.onload = getQuote();
