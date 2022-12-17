// Define the prices and probabilities
const prices = [
    {value: "Nothing", probability: 0.5},
    {value: "Free Spin", probability: 0.2},
    {value: "10$", probability: 0.15},
    {value: "50$", probability: 0.1},
    {value: "100$", probability: 0.04},
    {value: "1000$", probability: 0.01},
];

// The angle one the wheel one area uses (uniform sizes)
var priceAngle = 360 / prices.length;

var result = prices[0];

// Generate a list of the indices based on the probabilities
var weightedList = [];
for (let i=0; i < prices.length; i++)
{
    for (let j=0; j < prices[i].probability*100; j++)
    {
        weightedList.push(i);
    }
}

// Get a random index from the weightedList and use it to get the price
var winningPriceIndex = weightedList[Math.floor(Math.random() * weightedList.length)];
result = prices[winningPriceIndex];

// Full spins the wheel shoud turn (min. 1, max. 5)
var fullSpins = Math.floor(Math.random() * 4)+1;
// Offset from 0° to the start of the price
var offsetToPrice = winningPriceIndex * priceAngle;
// Random offset from the start of the price
var additionalOffset = Math.floor(Math.random() * priceAngle);

console.log("The wheel turns " + (fullSpins * 360 + offsetToPrice + additionalOffset) 
    + "° (" + fullSpins + " full spin + " + offsetToPrice + "° + " + additionalOffset + "°)");
console.log('You won: ' + result.value);