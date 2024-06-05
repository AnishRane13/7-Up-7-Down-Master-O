import React from 'react';
import { Typography, Box } from '@mui/material';

const ResultDisplay = ({ diceResult, result }) => {
  const resultColor = result === 'You win!' ? 'success.main' : 'error.main';
  
  return (
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      {diceResult && (
        <Typography variant="h6">
          Dice Result: {diceResult[0]} + {diceResult[1]} = {diceResult[0] + diceResult[1]}
        </Typography>
      )}
      {result && (
        <Typography variant="h5" sx={{ color: resultColor, mt: 1, fontWeight: 'bold' }}>
          {result}
        </Typography>
      )}
    </Box>
  );
};

export default ResultDisplay;
