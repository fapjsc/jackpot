import { useEffect } from 'react';
import OverView from './pages/OverView';
import { connectWithSocket, testWinPrize } from './utils/socketConnection';

// Audio
import staticAudio from './assets/music/static.mp3';
import winPrizeAudio from './assets/music/winPrize.mp3';
import goldScrollAudio from './assets/music/gold-scroll.mp3';
import jackpotAudio from './assets/music/jackpot.mp3';

// Redux
import { useSelector } from 'react-redux';

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { displayWinPrize, jackpotData, serviceBell } = useSelector(
    state => state.jackpot
  );

  useEffect(() => {
    connectWithSocket();

    // testWinPrize();
  }, []);

  // 背景音樂
  useEffect(() => {
    let audio;

    if (displayWinPrize) audio = new Audio(winPrizeAudio);

    if (!displayWinPrize) audio = new Audio(staticAudio);

    audio.loop = true;

    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [displayWinPrize]);

  // 金幣音效
  useEffect(() => {
    let goldAudio;

    if (jackpotData) goldAudio = new Audio(goldScrollAudio);

    goldAudio?.play();

    if (displayWinPrize) {
      goldAudio?.pause();
      goldAudio.currentTime = 0;
    }

    return () => {
      if (goldAudio) {
        goldAudio.pause();
        goldAudio.currentTime = 0;
      }
    };
  }, [jackpotData, displayWinPrize]);

  // JP1音效
  useEffect(() => {
    let jpAudio;

    if (displayWinPrize?.level === 'jackpot') {
      jpAudio = new Audio(jackpotAudio);

      jpAudio.loop = true;

      jpAudio.play();
    }

    return () => {
      if (jpAudio) {
        jpAudio.pause();
        jpAudio.currentTime = 0;
      }
    };
  }, [displayWinPrize]);

  // // 服務鈴
  // useEffect(() => {
  //   if (serviceBell?.length) {
  //     toast('test', {
  //       position: 'top-right',
  //       autoClose: false,
  //       style: { backgroundColor: 'red' },
  //       className: `123`,
  //     });
  //   }
  // }, [serviceBell]);

  // const test = () => {
  //   const el = document.getElementsByClassName('123');
  //   el.parentElement.removeChild(el);
  // };

  return (
    <>
      <ToastContainer pauseOnFocusLoss={false} />
      <OverView />

      <button
        onClick={test}
        style={{ width: '10rem', height: '10rem', backgroundColor: 'blue' }}
      >
        test
      </button>
    </>
  );
};

export default App;
