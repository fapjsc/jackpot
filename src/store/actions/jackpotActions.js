import {
  SET_JACKPOT_DATA,
  SET_WINNING_PRIZE,
  SET_WIN_PRIZE_HISTORY,
  SET_DISPLAY_WIN_PRIZE,
  REMOVE_DISPLAY_WIN_PRIZE,
  REMOVE_WIN_PRIZE_FROM_LIST,
  UPDATE_DISPLAY_WIN_PRIZE,
  SET_WIN_RECORD_LIST,
  UPDATE_WIN_PRIZE_LIST_CASH_IN_STATUS,
  SHOW_TOAST,
  SET_SERVICE_BELL,
  REMOVE_SERVICE_BELL_FROM_LIST,
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
    type: SET_DISPLAY_WIN_PRIZE,
    isPlayingAnimation,
  };
};

export const removeDisplayWinPrizeAnimation = () => {
  return {
    type: REMOVE_DISPLAY_WIN_PRIZE,
  };
};

export const updateDisplayWinPrize = cashInStatus => {
  return {
    type: UPDATE_DISPLAY_WIN_PRIZE,
    cashInStatus,
  };
};

export const updateWinPrizeListCashInStatus = cashInStatus => {
  return {
    type: UPDATE_WIN_PRIZE_LIST_CASH_IN_STATUS,
    cashInStatus,
  };
};

export const setWinRecordList = winRecordList => {
  return {
    type: SET_WIN_RECORD_LIST,
    winRecordList,
  };
};

export const setShowToast = showData => {
  return {
    type: SHOW_TOAST,
    payload: {
      show: showData.show,
      data: showData.data,
    },
  };
};

export const setServiceBell = serviceBellData => {
  return {
    type: SET_SERVICE_BELL,
    payload: {
      show: serviceBellData.action,
      data: serviceBellData.ip,
    },
  };
};

export const removeServiceBell = id => {
  return {
    type: REMOVE_SERVICE_BELL_FROM_LIST,
    id,
  };
};
