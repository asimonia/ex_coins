var startingAmount = 0.10;

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  var amountLeft = amount;
  var coinsNeeded = 0;

  coinsNeeded = Math.floor(amountLeft / .25);
  coinPurse.quarters = coinsNeeded;
  amountLeft -= coinPurse.quarters * .25;

  coinsNeeded = Math.floor(amountLeft / .10);
  coinPurse.dimes = coinsNeeded;
  amountLeft -= coinPurse.dimes * .10;

  coinsNeeded = Math.floor(amountLeft / .05);
  coinPurse.nickels = coinsNeeded;
  amountLeft -= coinPurse.nickels * .05;

  coinsNeeded = Math.floor(amountLeft / .01);
  coinPurse.pennies = coinsNeeded;
  amountLeft -= coinPurse.pennies * .01;

  return coinPurse;
}

var coins = coinCounter(startingAmount)
console.log(coins);