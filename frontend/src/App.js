import React, { useState } from 'react';
import axios from 'axios';
import { Container, Paper, Typography, Box, AppBar, Toolbar } from '@mui/material';
import BetOptions from './components/BetOptions';
import DiceRoll from './components/DiceRoll';
import ResultDisplay from './components/ResultDisplay';
import Dice from './components/Dice';

const App = () => {
  const [points, setPoints] = useState(5000);
  const [betAmount, setBetAmount] = useState(100);
  const [betChoice, setBetChoice] = useState('7up');
  const [diceResult, setDiceResult] = useState(null);
  const [result, setResult] = useState('');

  const handleBet = async () => {
    try {
      const response = await axios.post('http://localhost:5000/roll', { betAmount, betChoice, currentPoints: points });
      const { dice, newPoints, result } = response.data;
      setDiceResult(dice);
      setPoints(newPoints);
      setResult(result);
    } catch (error) {
      console.error('Error making the bet', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 4 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            7 UP 7 DOWN Game
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={6} sx={{ p: 4, width: '100%', textAlign: 'center', mt: 2 }}>
        <Typography variant="h5" gutterBottom color="secondary">
          Points: {points}
        </Typography>
        <BetOptions betAmount={betAmount} setBetAmount={setBetAmount} betChoice={betChoice} setBetChoice={setBetChoice} />
        <DiceRoll handleBet={handleBet} />
        <ResultDisplay diceResult={diceResult} result={result} />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          {diceResult && diceResult.map((value, index) => <Dice key={index} value={value} />)}
        </Box>
      </Paper>
    </Container>
  );
};

export default App;
