import { v4 as uuidv4 } from 'uuid';

import {
  SET_JACKPOT_DATA,
  SET_WINNING_PRIZE,
  REMOVE_WIN_PRIZE_FROM_LIST,
  SET_WIN_PRIZE_HISTORY,
  SET_DISPLAY_WIN_PRIZE,
  REMOVE_DISPLAY_WIN_PRIZE,
  UPDATE_DISPLAY_WIN_PRIZE,
  SET_WIN_RECORD_LIST,
  UPDATE_WIN_PRIZE_LIST_CASH_IN_STATUS,
  SHOW_TOAST,
  SET_SERVICE_BELL,
  REMOVE_SERVICE_BELL_FROM_LIST,
} from '../types';

const initialState = {
  jackpotData: null,
  winningPrize: [],
  history: [],
  displayWinPrize: null,
  winRecordList: [],
  showToast: { show: false, data: null },
  serviceBell: [],
};

const jackpotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JACKPOT_DATA:
      return {
        ...state,
        jackpotData: {
          ...action.jackpotData,
        },
      };

    case SET_WINNING_PRIZE: {
      const { id } = action.winningPrizeData;
      const item = { ...action.winningPrizeData };
      const existsItem = state.winningPrize.find((el) => el.id === id);

      if (existsItem) {
        return {
          ...state,
          winningPrize: state.winningPrize.map((el) => (el.id === id ? item : el)),
        };
      }
      return {
        ...state,
        winningPrize: [...state.winningPrize, item],
      };
    }

    case REMOVE_WIN_PRIZE_FROM_LIST:
      if (state.winningPrize[0].id === action.winningPrizeData.id) {
        return {
          ...state,
          winningPrize: state.winningPrize.filter((el) => el.id !== action.winningPrizeData.id),
          displayWinPrize: null,
        };
      }
      return {
        ...state,
      };

    case SET_WIN_PRIZE_HISTORY: {
      const prizeItem = { ...action.winPrizeData };
      const prizeExistsItem = state.history.find((el) => el.id === action.winPrizeData.id);

      if (prizeExistsItem) {
        return {
          ...state,
          history: state.history.map((el) => (el.id === action.winPrizeData.id ? prizeItem : el)),
        };
      }
      return {
        ...state,
        history: [...state.history, prizeItem],
      };
    }

    case SET_DISPLAY_WIN_PRIZE:
      return {
        ...state,
        displayWinPrize: state.winningPrize[0]
          ? { ...state.winningPrize[0], isPlayingAnimation: action.isPlayingAnimation || 'notPlaying' }
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

    case UPDATE_WIN_PRIZE_LIST_CASH_IN_STATUS: {
      const oldItem = state.winningPrize.find((el) => el.id === action.cashInStatus.id);
      const updateItem = {
        ...oldItem,
        cashInStatus: action.cashInStatus.cashInStatus,
      };

      if (oldItem) {
        return {
          ...state,
          winningPrize: state.winningPrize.map((el) => (el.id === oldItem.id ? updateItem : el)),
        };
      }
      return {
        ...state,
      };
    }

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

    case SHOW_TOAST:
      return {
        ...state,
        showToast: {
          show: action.payload.show,
          data: action.payload.data,
        },
      };

    case SET_SERVICE_BELL:
      if (action.payload.show === 'action') {
        return {
          ...state,
          serviceBell: [
            ...state.serviceBell,
            {
              ...action.payload,
              id: uuidv4(),
              time: new Date().toLocaleTimeString(),
            },
          ],
        };
      }
      return {
        ...state,
        serviceBell: state.serviceBell.map((el) => {
          if (el.data === action.payload.data) return { ...el, show: action.payload.show };
          return el;
        }),
      };

    case REMOVE_SERVICE_BELL_FROM_LIST:
      return {
        ...state,
        serviceBell: state.serviceBell.filter((el) => el.id !== action.id),
      };

    default:
      return state;
  }
};

export default jackpotReducer;
