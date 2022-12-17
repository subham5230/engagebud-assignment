import Prizes from "./Prizes";

export const play = () => {
  // The angle one the wheel one area uses (uniform sizes)
  var priceAngle = 360 / Prizes.length;

  var result = Prizes[0];

  // Generate a list of the indices based on the probabilities
  var weightedList = [];
  for (let i = 0; i < Prizes.length; i++) {
    for (let j = 0; j < Prizes[i].probability * 100; j++) {
      weightedList.push(i);
    }
  }

  // Get a random index from the weightedList and use it to get the price
    var winningPriceIndex =
      weightedList[Math.floor(Math.random() * weightedList.length)];
//   var winningPriceIndex = 1;
  result = Prizes[winningPriceIndex];

  // Full spins the wheel shoud turn (min. 1, max. 5)
  var fullSpins = Math.floor(Math.random() * 4) + 1;
  // Offset from 0° to the start of the price
  var offsetToPrice = winningPriceIndex * priceAngle;
  // Random offset from the start of the price
  var additionalOffset = Math.floor(Math.random() * (priceAngle/2));

  return {
    angle: fullSpins * 360 + offsetToPrice + additionalOffset,
    reward: {coupon: result.coupon, display: result.display},
  };
};
