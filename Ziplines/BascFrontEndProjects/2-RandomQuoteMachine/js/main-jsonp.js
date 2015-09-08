function parseQuote(response) {
  var qText = response.quoteText;
  var qAuthor = response.quoteAuthor;
  document.getElementById('quote').innerHTML = qText;
  document.getElementById('author').innerHTML = qAuthor;
  var tLink = document.getElementsByClass('twitter-share-button')[0];
  var bLink = document.getElementById('b');
  console.log(tLink);
  console.log('href', 'https://twitter.com/intent/tweet?text=' + qText);
  tLink.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + qText);
  bLink.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + qText);
}

function getQuote() {
  var scriptApi = document.createElement('script');
  scriptApi.src = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote';
  document.body.insertBefore(scriptApi, document.getElementsByName('title')[0]);
}

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

window.onload = getQuote();
