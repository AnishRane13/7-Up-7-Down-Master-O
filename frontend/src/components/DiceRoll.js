import React from 'react';
import { Button } from '@mui/material';

const DiceRoll = ({ handleBet }) => (
  <Button
    onClick={handleBet}
    variant="contained"
    color="primary"
    fullWidth
    sx={{ mt: 3, fontWeight: 'bold' }}
  >
    Roll Dice
  </Button>
);

export default DiceRoll;
