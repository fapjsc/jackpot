import { useEffect } from 'react';
import OverView from './pages/OverView';
import {
  connectWithAgent,
  disconnectWithAgent,
  testWinPrize,
} from './utils/socketConnection';

// Audio
import staticAudio from './assets/music/static.mp3';
import winPrizeAudio from './assets/music/winPrize.mp3';
import goldScrollAudio from './assets/music/gold-scroll.mp3';
import jackpotAudio from './assets/music/jackpot.mp3';
import serviceAudio from './assets/music/service-ball.mp3';
import closeService from './assets/music/close-service-bell.wav';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { removeServiceBell } from './store/actions/jackpotActions';

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  const { displayWinPrize, jackpotData, serviceBell } = useSelector(
    state => state.jackpot
  );

  useEffect(() => {
    connectWithAgent();

    // testWinPrize();

    return () => {
      disconnectWithAgent();
    };
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

  // 服務鈴
  useEffect(() => {
    const serviceOpen = () => {
      let serviceBell = new Audio(serviceAudio);
      serviceBell.play();
    };

    const serviceBellCloseHandler = id => {
      dispatch(removeServiceBell(id));
      let closeBell = new Audio(closeService);
      closeBell.currentTime = 0.5;
      closeBell.play();
    };

    if (serviceBell?.length) {
      serviceBell.forEach(el => {
        if (el.show === 'action') {
          toast.error(`服務人員請至 ${el.data} - ${el.time}`, {
            position: 'bottom-left',
            autoClose: false,
            // style: { backgroundColor: '#fff' },
            toastId: el.id,
            onOpen: () => serviceOpen(),
          });
        } else {
          serviceBellCloseHandler(el.id);
          toast.dismiss(el.id);
          dispatch(removeServiceBell(el.id));
        }
      });
    }
  }, [serviceBell, dispatch]);

  return (
    <>
      <ToastContainer pauseOnFocusLoss={false} />
      <OverView />
    </>
  );
};

export default App;
