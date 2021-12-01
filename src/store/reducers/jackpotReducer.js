import {
  SET_JACKPOT_DATA,
  SET_WINNING_PRIZE,
  REMOVE_WIN_PRIZE_FROM_LIST,
  SET_WIN_PRIZE_HISTORY,
  SET_DISPLAY_WIN_PRIZE,
  REMOVE_DISPLAY_WIN_PRIZE,
  UPDATE_DISPLAY_WIN_PRIZE,
  SET_WIN_RECORD_LIST,
} from '../types';

const initialState = {
  jackpotData: null,
  winningPrize: [],
  history: [],
  displayWinPrize: null,
  winRecordList: [],
};

export const jackpotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JACKPOT_DATA:
      return {
        ...state,
        jackpotData: {
          ...action.jackpotData,
        },
      };

    case SET_WINNING_PRIZE:
      const { id } = action.winningPrizeData;
      const item = { ...action.winningPrizeData };
      const existsItem = state.winningPrize.find(el => el.id === id);

      if (existsItem) {
        return {
          ...state,
          winningPrize: state.winningPrize.map(el =>
            el.id === id ? item : el
          ),
        };
      } else {
        return {
          ...state,
          winningPrize: [...state.winningPrize, item],
        };
      }

    case REMOVE_WIN_PRIZE_FROM_LIST:
      return {
        ...state,
        winningPrize: state.winningPrize.filter(
          el => el.id !== action.winningPrizeData.id
        ),
      };

    case SET_WIN_PRIZE_HISTORY:
      const prizeItem = { ...action.winPrizeData };
      const prizeExistsItem = state.history.find(
        el => el.id === action.winPrizeData.id
      );

      if (prizeExistsItem) {
        return {
          ...state,
          history: state.history.map(el =>
            el.id === action.winPrizeData.id ? prizeItem : el
          ),
        };
      } else {
        return {
          ...state,
          history: [...state.history, prizeItem],
        };
      }

    case SET_DISPLAY_WIN_PRIZE:
      return {
        ...state,
        displayWinPrize: state.winningPrize[0]
          ? {
              ...state.winningPrize[0],
              isPlayingAnimation: action.isPlayingAnimation || 'notPlaying',
            }
          : null,
      };

    case UPDATE_DISPLAY_WIN_PRIZE:
      return {
        ...state,
        displayWinPrize: {
          ...state.displayWinPrize,
          cashInStatus: action.cashInStatus,
        },
      };

    case REMOVE_DISPLAY_WIN_PRIZE:
      return {
        ...state,
        displayWinPrize: null,
      };

    case SET_WIN_RECORD_LIST:
      return {
        ...state,
        winRecordList: action.winRecordList,
      };

    default:
      return state;
  }
};
