import React, { useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Toast
import { ToastContainer, toast } from 'react-toastify';

import PropTypes from 'prop-types';

import OverView from './pages/OverView';

import {
  connectWithAgent,
  disconnectWithAgent,
  // testWinPrize,
} from './utils/socketConnection';

// Audio
import staticAudio from './assets/music/static.mp3';
import winPrizeAudio from './assets/music/winPrize.mp3';
import goldScrollAudio from './assets/music/gold-scroll.mp3';
import jackpotAudio from './assets/music/jackpot.mp3';
import serviceAudio from './assets/music/service-ball.mp3';
import closeService from './assets/music/close-service-bell.wav';
import jp2Audio from './assets/music/jp2.wav';

// Actions
import { removeServiceBell } from './store/actions/jackpotActions';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  const { displayWinPrize, jackpotData, serviceBell } = useSelector((state) => state.jackpot);

  useEffect(() => {
    connectWithAgent();
    // testWinPrize();
    return () => {
      disconnectWithAgent();
    };
  }, []);

  // 背景音樂s
  useEffect(() => {
    let audio;

    if (displayWinPrize) audio = new Audio(winPrizeAudio);

    if (!displayWinPrize) audio = new Audio(staticAudio);

    if (!audio) return;

    audio.loop = true;

    const audioPromise = audio.play();

    return () => {
      if (!audio) return;

      if (audioPromise !== undefined) {
        audioPromise
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  }, [displayWinPrize]);

  // 金幣音效
  useEffect(() => {
    let goldAudio;

    if (jackpotData) goldAudio = new Audio(goldScrollAudio);

    if (!goldAudio) return;

    goldAudio.playbackRate = 0.6;
    const goldPromise = goldAudio.play();

    if (displayWinPrize && goldAudio && goldPromise !== undefined) {
      goldPromise
        .then(() => {
          goldAudio.pause();
          goldAudio.currentTime = 0;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => {
      if (!goldAudio) return;

      if (displayWinPrize && goldPromise !== undefined) {
        goldPromise
          .then(() => {
            goldAudio.pause();
            goldAudio.currentTime = 0;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  }, [jackpotData, displayWinPrize]);

  // JP音效
  useEffect(() => {
    if (!displayWinPrize) return;

    let jpAudio;

    if (displayWinPrize?.level === 'jackpot') { jpAudio = new Audio(jackpotAudio); }

    if (displayWinPrize?.level === 'secondPrize') { jpAudio = new Audio(jp2Audio); }

    if (!jpAudio) return;

    jpAudio.loop = true;
    const jpAudioPromise = jpAudio?.play();

    return () => {
      if (!jpAudio) return;

      if (jpAudioPromise !== undefined) {
        jpAudioPromise
          .then(() => {
            jpAudio.pause();
            jpAudio.currentTime = 0;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  }, [displayWinPrize]);

  // 服務鈴
  useEffect(() => {
    if (!serviceBell?.length) return;

    // Service open Handler
    const serviceOpen = () => {
      const serviceBellAudio = new Audio(serviceAudio);
      serviceBellAudio.play();
    };

    // Service close handler
    const serviceBellCloseHandler = (id) => {
      dispatch(removeServiceBell(id));
      const closeBellAudio = new Audio(closeService);
      closeBellAudio.currentTime = 0.5;
      closeBellAudio.play();
    };

    // Toast Message
    const Msg = ({ machineName, time }) => (
      <div>
        服務人員請至
        <span style={{ color: 'red' }}>
          {machineName}
        </span>
        -
        {time}
      </div>
    );

    serviceBell.forEach((el) => {
      if (el.show === 'action') {
        toast.error(<Msg time={el.time} machineName={el.data} />, {
          position: 'bottom-left',
          autoClose: false,
          toastId: el.id,
          onOpen: () => serviceOpen(),
          // style: { backgroundColor: '#fff' },

        });
      } else {
        serviceBellCloseHandler(el.id);
        toast.dismiss(el.id);
        dispatch(removeServiceBell(el.id));
      }
    });

    Msg.propTypes = {
      machineName: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    };
  }, [serviceBell, dispatch]);

  return (
    <>
      <ToastContainer pauseOnFocusLoss={false} toastClassName="dark-toast" />
      <OverView />
    </>
  );
};

export default App;
