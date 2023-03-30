const minCoinChange = (coins, amount) => {
  let sum = amount;
  let answer = [];
  for (let i = coins.length - 1; i >= 0; i--) {
    if (coins[i] <= sum) {
      let count = parseInt(sum / coins[i]);
      for (let j = 0; j < count; j++) {
        answer.push(coins[i]);
      }
      sum -= count * coins[i];
    }
  }

  if (sum > 0) {
    return -1; // not enough coins to make change
  }

  return answer;
};
console.log(minCoinChange([1, 2, 3, 4, 5], 11)); //[ 5, 5, 1 ]
console.log(minCoinChange([5, 10, 15, 20, 25], 85)); //[ 25, 25, 25, 10 ]
console.log(minCoinChange([1, 5, 6, 9], 11)); //[ 9, 1, 1 ]
