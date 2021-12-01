import { useEffect } from 'react';
import OverView from './pages/OverView';
import { connectWithSocket, testWinPrize } from './utils/socketConnection';

const App = () => {
  useEffect(() => {
    connectWithSocket();
    // testWinPrize();
  }, []);
  return <OverView />;
};

export default App;
