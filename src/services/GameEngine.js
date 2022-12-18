import Prizes from "./Prizes";

export const play = () => {
  var priceAngle = 360 / Prizes.length;

  var result = Prizes[0];

  var probabilityList = [];
  for (let i = 0; i < Prizes.length; i++) {
    for (let j = 0; j < Prizes[i].probability * 100; j++) {
      probabilityList.push(i);
    }
  }

  // Get a random index from the probabilityList and mark it as winner
  var winningIndex = probabilityList[Math.floor(Math.random() * probabilityList.length)];
  result = Prizes[winningIndex];

  var fullSpins = Math.floor(Math.random() * 4) + 1; // min. = 1, max. = 5 full spins, select randomly

  var offsetToPrice = winningIndex * priceAngle; // Offset from 0° to the starting angle of the winner

  var extraOffset = Math.floor(Math.random() * (priceAngle / 2)); // extra random offset from the start of the winner

  return {
    angle: fullSpins * 360 + offsetToPrice + extraOffset, // total deg for spinning the wheel
    reward: { coupon: result.coupon, display: result.display },
  };
};
