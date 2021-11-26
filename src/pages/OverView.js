import { useState, useEffect } from 'react';

// Components
import SideBar from '../components/SideBar';
import JackpotContent from '../components/JackpotContent';
import WinningRecord from '../components/winningRecord/WinningRecord';
import JackpotPrizeAnimation from '../components/winPrizeAnimation/JackpotPrizeAnimation';

// React-animation
import { CSSTransition } from 'react-transition-group';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// actions
import {
  removeWinningData,
  setDisplayWinPrize,
  removeDisplayWinPrizeAnimation,
  // updateDisplayWinPrize,
} from '../store/actions/jackpotActions';

// Style
import classes from './OverView.module.scss';

import '../sass/reactTransition.scss';

const OverView = () => {
  const [winPrize, setWinPrize] = useState(false);
  const [showOverView, setShowOverView] = useState(true);

  // const [playAnimationItem, setPlayAnimationItem] = useState();

  // Redux
  const { winningPrize, displayWinPrize } = useSelector(state => state.jackpot);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('test');
    const existsItem = winningPrize?.find(el => el.id === displayWinPrize?.id);

    if (existsItem?.cashInStatus !== displayWinPrize?.cashInStatus) {
      if (displayWinPrize?.isPlayingAnimation === 'isPlaying') {
        dispatch(setDisplayWinPrize('isPlaying'));
        setWinPrize(false);
      } else {
        console.log('cash in fail');
        dispatch(setDisplayWinPrize());
      }
    }

    if (winningPrize?.length > 0 && !displayWinPrize) {
      console.log('set1');
      dispatch(setDisplayWinPrize());
    }

    if (
      displayWinPrize &&
      displayWinPrize.id === winningPrize[0].id &&
      displayWinPrize.isPlayingAnimation === 'notPlaying'
    ) {
      dispatch(setDisplayWinPrize('isPlaying'));
      console.log('play');
      setWinPrize(true);

      setTimeout(() => {
        if (displayWinPrize?.cashInStatus === 'success') {
          console.log('play finishing');
          setWinPrize(false);
        }
      }, 5000);
    }
  }, [winningPrize, displayWinPrize, dispatch]);

  return (
    <div className={classes.container}>
      <div style={{ flex: '0.3' }}>
        <SideBar />
        <WinningRecord />
      </div>

      <div style={{ flex: '0.7', backgroundColor: '#ff7875' }}>
        <CSSTransition
          in={winPrize && displayWinPrize}
          timeout={300}
          classNames="jackpot-animation-transition"
          mountOnEnter
          unmountOnExit
          onExited={() => {
            setShowOverView(true);
            dispatch(removeWinningData(displayWinPrize));
            dispatch(removeDisplayWinPrizeAnimation());
          }}
          onEntered={() => {
            setShowOverView(false);
          }}
        >
          <JackpotPrizeAnimation playAnimationItem={displayWinPrize} />
        </CSSTransition>

        <CSSTransition
          in={showOverView}
          timeout={300}
          classNames="jackpot-content-transition"
          mountOnEnter
          unmountOnExit
        >
          <JackpotContent />
        </CSSTransition>
      </div>
    </div>
  );
};

export default OverView;
