$(document).ready(function() {
  $( "#btn-get" ).click(function(event) {
    $.getJSON("http://api.forismatic.com/api/1.0/", {method: "getQuote", format: "json", lang: "en"}, function(data) {
        $( "#quote" ).html(data.quoteText);
        $( "#author" ).html(data.quoteAuthor);
    });
  });
});
