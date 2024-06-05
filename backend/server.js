const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/roll', (req, res) => {
  const { betAmount, betChoice, currentPoints } = req.body;

  // Generate two random dice rolls
  const dice = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
  const sum = dice[0] + dice[1];

  let result = '';
  let newPoints = currentPoints; // Get current points from the request

  // Calculate the new points and result based on the bet choice and dice sum
  if ((sum < 7 && betChoice === '7down') || (sum > 7 && betChoice === '7up')) {
    result = 'You win!';
    newPoints += betAmount * 2; // Add the bet amount as winnings
  } else if (sum === 7 && betChoice === '7') {
    result = 'You hit Lucky 7!';
    newPoints += betAmount * 5; // Add four times the bet amount as winnings
  } else {
    result = 'You lose!';
    newPoints -= betAmount; // Subtract the bet amount as loss
  }

  // Ensure the points do not go below zero
  if (newPoints < 0) {
    newPoints = 0;
  }

  // Send the response with the dice results, new points, and result message
  res.json({ dice, newPoints, result });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
