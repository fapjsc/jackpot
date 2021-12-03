import { useEffect } from 'react';
import OverView from './pages/OverView';
import { connectWithSocket, testWinPrize } from './utils/socketConnection';

import staticAudio from './assets/music/static.mp3';
import winPrizeAudio from './assets/music/winPrize.mp3';

// Redux
import { useSelector } from 'react-redux';

const App = () => {
  const { displayWinPrize } = useSelector(state => state.jackpot);

  useEffect(() => {
    connectWithSocket();

    // testWinPrize();
  }, []);

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

  return <OverView />;
};

export default App;
