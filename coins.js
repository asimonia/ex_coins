var startingAmount = .46;

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  var amountLeft = amount;
  var coinsNeeded = 0;

  coinsNeeded = Math.floor(amountLeft / 0.25);
  coinPurse.quarters = coinsNeeded;
  if (!(amountLeft % .25)) {
    return coinPurse;
  }
  amountLeft -= coinPurse.quarters * 0.25;

  coinsNeeded = Math.floor(amountLeft / .10);
  coinPurse.dimes = coinsNeeded;
  if (!(amountLeft % .10)) {
    return coinPurse;
  }
  amountLeft -= coinPurse.dimes * .10;

  coinsNeeded = Math.floor(amountLeft / .05);
  coinPurse.nickels = coinsNeeded;
  if (!(amountLeft % .05)) {
    return coinPurse;
  }
  amountLeft -= coinPurse.nickels * .05;

  coinPurse.pennies = coinsNeeded;
  if (!(amountLeft % .01)) {
    return coinPurse;
  }
  amountLeft -= coinPurse.pennies * .01;

  return coinPurse;
}

var coins = coinCounter(startingAmount)
console.log(coins);