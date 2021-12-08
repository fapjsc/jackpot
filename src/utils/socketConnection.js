import socketClient from 'socket.io-client';
// import { v4 as uuidv4 } from 'uuid';s

// Config
import config from '../config/config.json';

// Helpers
import { _getAmount } from './helper';

// Redux
import store from '../store/store';

// Actions
import {
  setJackpotData,
  setWinningPrizeData,
  // setHistory,
  setWinRecordList,
  updateWinPrizeListCashInStatus,
  setShowToast,
  setServiceBell,
} from '../store/actions/jackpotActions';

// Api
import { getWinRecordList } from './api';

const SERVER = config.AGENT_SERVER_IP;

let socket;

let tmp;

// console.log(store.getState().jackpot.displayWinPrize);

export const connectWithAgent = () => {
  console.log('try to connect');
  socket = socketClient(SERVER);

  socket.on('connect', () => {
    console.log('successfully connected with socket server');
    if (!store.getState().jackpot.setWinRecordList?.length) {
      getWinRecordList();
    }
  });

  socket.on('disconnect', () => {
    console.log('disconnect');
  });

  socket.on('connect_error', (err) => {
    console.log('connect_error', err);
  });

  socket.on('jackpot', (jackpotData) => {
    // console.log('get jackpot data');
    if (JSON.stringify(jackpotData) === tmp) return;

    tmp = JSON.stringify(jackpotData);
    store.dispatch(setJackpotData(jackpotData));
  });

  socket.on('jackpotWinRecord', (data) => {
    store.dispatch(setWinRecordList(data));
  });

  socket.on('win-prize', (winPrizeData) => {
    store.dispatch(
      setWinningPrizeData({
        ...winPrizeData,
        // amountWinning: winPrizeData.amountWinning?.toFixed(2),
        amountWinning: _getAmount(winPrizeData.amountWinning),
      }),
    );
    // store.dispatch(setHistory(winPrizeData));

    if (store.getState().jackpot.displayWinPrize) {
      store.dispatch(setShowToast({ show: true, data: winPrizeData }));
    }

    if (winPrizeData.cashInStatus === 'pending') {
      // console.log('🔥 中獎了！！', winPrizeData);
    }

    if (winPrizeData.cashInStatus === 'success') {
      // console.log('👉 已入帳！！', winPrizeData);
    }

    if (winPrizeData.cashInStatus === 'fail') {
      // console.log('🔺 入帳時發生錯誤！！', winPrizeData);
    }
  });

  socket.on('update-win-prize', (cashInStatusData) => {
    // console.log(cashInStatusData);
    const cashInStatus = {
      id: cashInStatusData.id,
      cashInStatus: cashInStatusData.cashInStatus,
    };

    store.dispatch(updateWinPrizeListCashInStatus(cashInStatus));
  });

  socket.on('serviceBell', (data) => {
    // console.log(data);
    store.dispatch(setServiceBell(data));
  });

  // socket.on('cashInSuccess', winPrizeData => {
  //   // console.log('🌟 cash in success', winPrizeData)
  //   if (winPrizeData.status === 200) {
  //     // store.dispatch(removeWinningData(winPrizeData.data))

  //   }
  // })
};

export const disconnectWithAgent = () => {
  socket?.close();
};
