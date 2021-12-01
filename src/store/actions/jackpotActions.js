import {
  SET_JACKPOT_DATA,
  SET_WINNING_PRIZE,
  SET_WIN_PRIZE_HISTORY,
  DISPLAY_WINNING_ANIMATION,
  REMOVE_DISPLAY_WINNING_ANIMATION,
  REMOVE_WIN_PRIZE_FROM_LIST,
  UPDATE_DISPLAY_WIN_PRIZE,
  // UPDATE_DISPLAY_WIN_PRIZE,
} from '../types';

export const setJackpotData = jackpotData => {
  return {
    type: SET_JACKPOT_DATA,
    jackpotData,
  };
};

export const setWinningPrizeData = winningPrizeData => {
  return {
    type: SET_WINNING_PRIZE,
    winningPrizeData,
  };
};

export const removeWinningData = winningPrizeData => {
  return {
    type: REMOVE_WIN_PRIZE_FROM_LIST,
    winningPrizeData,
  };
};

export const setHistory = winPrizeData => {
  return {
    type: SET_WIN_PRIZE_HISTORY,
    winPrizeData,
  };
};

export const setDisplayWinPrize = isPlayingAnimation => {
  return {
    type: DISPLAY_WINNING_ANIMATION,
    isPlayingAnimation,
  };
};

export const removeDisplayWinPrizeAnimation = () => {
  return {
    type: REMOVE_DISPLAY_WINNING_ANIMATION,
  };
};

export const updateDisplayWinPrize = cashInStatus => {
  return {
    type: UPDATE_DISPLAY_WIN_PRIZE,
    cashInStatus,
  };
};
