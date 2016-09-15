var curStr = '';
var evalStr = '';

var curDisp = $('#cur');
var histDisp = $('#hist');
var pushButton = $('button');

var newEntry = true;

// **** Display refresh ****
function drawDisplay() {

  histDisp.text(evalStr);

  if (curStr === '') {
    curDisp.text('0');
  } else {
    curDisp.text(curStr);
  }
}

// **** Button handler ****
function handleButton(elem) {

  var elemVal = elem.text();
  var elemClass = elem.attr('class');
  var elemId = elem.attr('id');

  // **** Digits ****
  if (elemClass === 'digit') {

    if (newEntry) curStr = '';

    if (curStr.length < 12) {
      if (!(elemVal === '0' && curStr === '')) {
        curStr += elemVal;
      }
    }

    newEntry = false;
  }

  // **** Decimal ****
  if (elemId === 'decimal') {

    if (newEntry) curStr = '';

    if (curStr === '') {
      curStr += '0.';
    }
    if (curStr.indexOf('.') < 0) {
      curStr += '.';
    }

    newEntry = false;
  }

  // **** Operators ****
  if (elemClass === 'operator') {

    if (evalStr === '') {
      if (curStr === '' || curStr == 0) {
        evalStr += '0 ' + elemVal;
        curStr = '';
      } else {
        evalStr = curStr + ' ' + elemVal + ' ';
      }
    } else if (newEntry) {
      evalStr = evalStr.slice(0, -2) + elemVal + ' ';
    } else {
      evalStr = evalStr + curStr + ' ' + elemVal + ' ';
      curStr = myUglyTrickyEval(evalStr.slice(0, -3));
    }
    newEntry = true;
  }

  // **** Plusminus ****
  if (elemId === 'plusminus') {
    curStr = eval(curStr * -1);
  }

  // **** Evaluation ****
  if (elemId === 'eval') {
    if (evalStr !== '') {
      evalStr += curStr;
      curStr = myUglyTrickyEval(evalStr);
      evalStr = '';
      newEntry = true;
    }
  }

  // **** Clear ****
  if (elemId === 'clear-all') {
    curStr = '';
    evalStr = '';
    newEntry = true;
  }

  if (elemId === 'clear-cur') {
    curStr = '';
    newEntry = true;
  }

  drawDisplay();
}

// Nice looking .1 + .2 but lack of precise in large numbers math
function myUglyTrickyEval(toEval) {
  var result = Number(eval(toEval)).toPrecision(12);
  if (!/e/i.test(result)) {
    result = Number(result);
  }
  return result;
}

$(document).ready(function() {

  drawDisplay();

  pushButton.click(function() {
    handleButton($(this));
  });

});
