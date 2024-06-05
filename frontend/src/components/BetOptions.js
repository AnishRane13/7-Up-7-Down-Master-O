import React from 'react';
import { ToggleButton, ToggleButtonGroup, Typography, Box } from '@mui/material';

const BetOptions = ({ betAmount, setBetAmount, betChoice, setBetChoice }) => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      Bet Amount
    </Typography>
    <ToggleButtonGroup
      value={betAmount}
      exclusive
      onChange={(e, newAmount) => setBetAmount(newAmount)}
      aria-label="bet amount"
      sx={{ mb: 2 }}
    >
      {[100, 200, 500].map((amount) => (
        <ToggleButton key={amount} value={amount} color="primary">
          {amount}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>

    <Typography variant="h6" gutterBottom>
      Bet Choice
    </Typography>
    <ToggleButtonGroup
      value={betChoice}
      exclusive
      onChange={(e, newChoice) => setBetChoice(newChoice)}
      aria-label="bet choice"
    >
      {['7up', '7', '7down'].map((choice) => (
        <ToggleButton key={choice} value={choice} color="secondary">
          {choice.replace('7up', '7 Up').replace('7down', '7 Down').replace('7', 'Lucky 7')}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  </Box>
);

export default BetOptions;
