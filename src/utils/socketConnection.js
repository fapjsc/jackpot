import socketClient from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

// Redux
import store from '../store/store';

// Actions
import {
  setJackpotData,
  setWinningPrizeData,
  setHistory,
} from '../store/actions/jackpotActions';

const SERVER = 'http://192.168.10.200:3030';

let socket;

let tmp;

export const connectWithSocket = () => {
  console.log('try to connect');
  socket = socketClient(SERVER);

  socket.on('connect', () => {
    console.log('successfully connected with socket server');
  });

  socket.on('jackpot', jackpotData => {
    // console.log('get jackpot data');
    if (JSON.stringify(jackpotData) === tmp) return;

    tmp = JSON.stringify(jackpotData);
    store.dispatch(setJackpotData(jackpotData));
  });

  socket.on('jackpotWinRecord', data => {
    // console.log(data);
  });

  socket.on('win-prize', winPrizeData => {
    store.dispatch(
      setWinningPrizeData({
        ...winPrizeData,
        amountWinning: winPrizeData.amountWinning.toFixed(2),
      })
    );
    store.dispatch(setHistory(winPrizeData));

    if (winPrizeData.cashInStatus === 'pending') {
      // console.log('🔥 中獎了！！', winPrizeData);
    }

    if (winPrizeData.cashInStatus === 'success') {
      // console.log('👉 已入帳！！', winPrizeData);
    }

    if (winPrizeData.cashInStatus === 'fail') {
      console.log('🔺 入帳時發生錯誤！！', winPrizeData);
    }
  });

  // socket.on('cashInSuccess', winPrizeData => {
  //   // console.log('🌟 cash in success', winPrizeData)
  //   if (winPrizeData.status === 200) {
  //     // store.dispatch(removeWinningData(winPrizeData.data))

  //   }
  // })
};

// ==== 測試播放動畫邏輯用 ==== //
let arr = ['success', 'fail'];
let levelArr = [
  'jackpot',
  'secondPrize',
  'thirdPrize',
  'fourPrize',
  'fifthPrize',
  'sixthPrize',
];

export const testWinPrize = () => {
  setInterval(() => {
    const num = randomNum(1, 2);
    store.dispatch(
      setWinningPrizeData({
        ip: '192.168.10.99',
        amountWinning: 100.12902942,
        id: uuidv4(),
        level: 'level6',
        cashInStatus: arr[1] || 'success',
        // cashInStatus: 'success',
      })
    );
  }, 10000);
};

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
