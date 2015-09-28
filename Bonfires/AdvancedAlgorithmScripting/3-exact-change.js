/*
Design a cash register drawer function that accepts purchase price as the first
argument, payment as the second argument, and cash-in-drawer (cid) as the third
argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the
change due. Return the string "Closed" if cash-in-drawer is equal to the change
due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Here are some helpful links:
Global Object
*/

var nom = [['PENNY', 0.01], ['NICKEL', 0.05], ['DIME', 0.10], ['QUARTER', 0.25], ['ONE', 1.00], ['FIVE', 5.00], ['TEN', 10.00], ['TWENTY', 20.00], ['ONE HUNDRED', 100.00]];
​
function drawer(price, cash, cid) {
  var change;
  var changeNeed = Number((cash - price).toFixed(2));
  var totalCid = 0;
  for ( var i = 0; i < cid.length; i++ ) {
    totalCid += cid[i][1];
  }
  totalCid = Number(totalCid.toFixed(2));

  if (totalCid == changeNeed) {
    return "Closed";
  } else if (totalCid < changeNeed) {
    return "Insufficient Funds";
  } else {
    change = getChange(changeNeed, cid);
  }
  // Here is your change, ma'am.
  return change;
}
​
function getChange(ch, cid) {
  var result = [];
  for (var i = cid.length - 1; i >= 0; i--) {
    if (cid[i][1] !== 0 && ch / cid[i][1] >= 1) {
      result.push(cid[i]);
      ch = Number((ch - cid[i][1]).toFixed(2));
    } else if (cid[i][1] !== 0 && ch / nom[i][1] >= 1) {
      var nomAmount = Number((cid[i][1] / nom[i][1]).toFixed());
      for (var j = nomAmount - 1; j >= 1; j--) {
        if (ch / (nom[i][1] * j) >= 1) {
          result.push([cid[i][0], nom[i][1] * j]);
          ch = Number((ch - nom[i][1] * j).toFixed(2));
        }
      }
    }
  }
  return result;
}
​
drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
​
