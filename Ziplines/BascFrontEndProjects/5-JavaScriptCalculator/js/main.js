var display = $( '#display' );
var current = $( '#current' );
var button = $( 'button' );
var evalString = '';
var curNumber = '';
var newNumber = true;

function showCurrent() {
  var toShow = curNumber === '' ? '0' : curNumber;
  display.text( evalString );
  current.text( toShow );
}

function handleButton( elem ) {
  
  var buttonValue = elem.text();
  
  if (elem.hasClass( 'digit' )) {
    if (curNumber.length < 16)  {
      if ( buttonValue !== '0' ) {
        curNumber += buttonValue;
        showCurrent();
      } else {
        if ( curNumber !== '' && curNumber !== '0') {
          curNumber += buttonValue;
          showCurrent();
        }
      }
    }
  }
  
  if (elem.hasClass( 'operator' )) {
    if (evalString === '' ) {
      if (curNumber === '') {
        evalString = '0 ' + buttonValue + ' '; 
      } else {
        evalString = curNumber + ' ' + buttonValue + ' '; 
      }
    }
    
    if (evalString.slice(-1) === ' ') {
      evalString = evalString.slice(0, -3) + ' ' + buttonValue + ' ';  
    } else {
      evalString = curNumber + ' ' + buttonValue + ' ';  
    }
    display.text( evalString );
    curNumber = '';
  }
  
  if (elem.attr( 'id' ) === 'decimal' && curNumber.indexOf('.') < 0) {
    curNumber += '.';
    showCurrent();
  }
  
  if (elem.attr( 'id' ) === 'clear') {
    evalString = '';
    curNumber = '';
    showCurrent();
    display.text( evalString );
  }
  
  if (elem.attr( 'id' ) === 'eval') {
    curNumber = eval( evalString + curNumber);
    evalString = '';
    showCurrent();
  }
}

$(document).ready(function() {
  showCurrent();
  button.click(function() {
    handleButton( $(this) );
    
  })
});