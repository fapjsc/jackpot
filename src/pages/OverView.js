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
  updateDisplayWinPrize,
} from '../store/actions/jackpotActions';

// Style
import classes from './OverView.module.scss';

import '../sass/reactTransition.scss';

const OverView = () => {
  const [winPrize, setWinPrize] = useState(false);
  const [showOverView, setShowOverView] = useState(true);

  // Redux
  const { winningPrize, displayWinPrize } = useSelector(state => state.jackpot);
  const dispatch = useDispatch();

  // 設定中獎播放動畫數據
  useEffect(() => {
    if (winningPrize?.length > 0 && !displayWinPrize) {
      dispatch(setDisplayWinPrize());
    }
  }, [winningPrize, displayWinPrize, dispatch]);

  // 判斷是否開始播放動畫
  useEffect(() => {
    if (displayWinPrize?.isPlayingAnimation === 'notPlaying') {
      console.log('isPlaying');
      dispatch(setDisplayWinPrize('isPlaying'));
      setWinPrize(true);
    }
  }, [displayWinPrize, dispatch]);

  // 播放10秒後改變狀態
  useEffect(() => {
    if (displayWinPrize?.isPlayingAnimation === 'isPlaying') {
      setTimeout(() => {
        console.log('playing Finishing');
        dispatch(setDisplayWinPrize('playingFinishing'));
      }, 10000);
    }
  }, [displayWinPrize, dispatch]);

  // server回傳狀態後更新cashInStatus
  useEffect(() => {
    if (winningPrize[0]?.id === displayWinPrize?.id) {
      if (winningPrize[0]?.cashInStatus !== displayWinPrize?.cashInStatus) {
        dispatch(updateDisplayWinPrize(winningPrize[0]?.cashInStatus));
      }
    }
  }, [dispatch, winningPrize, displayWinPrize]);

  // 結束動畫
  useEffect(() => {
    if (
      displayWinPrize?.cashInStatus === 'success' &&
      displayWinPrize?.isPlayingAnimation === 'playingFinishing'
    ) {
      setWinPrize(false);
      // dispatch(removeWinningData(displayWinPrize));
      // dispatch(removeDisplayWinPrizeAnimation());
    }
  }, [displayWinPrize, dispatch]);

  return (
    <div className={classes.container}>
      <div style={{ flex: '0.3' }}>
        <SideBar />
        <WinningRecord />
      </div>

      <div style={{ flex: '0.7' }}>
        <CSSTransition
          in={winPrize}
          timeout={1000}
          classNames="jackpot-animation-transition"
          mountOnEnter
          unmountOnExit
          onExited={() => {
            setShowOverView(true);
            // dispatch(removeWinningData(displayWinPrize));
            // dispatch(removeDisplayWinPrizeAnimation());
          }}
          onEntered={() => {
            setShowOverView(false);
          }}
        >
          <JackpotPrizeAnimation
            setWinPrize={setWinPrize}
            playAnimationItem={displayWinPrize}
          />
        </CSSTransition>

        {!winPrize && (
          <CSSTransition
            in={showOverView}
            timeout={1000}
            classNames="jackpot-content-transition"
            mountOnEnter
            unmountOnExit
            onEntered={() => {
              if (displayWinPrize) {
                dispatch(removeWinningData(displayWinPrize));
                dispatch(removeDisplayWinPrizeAnimation());
              }
            }}
          >
            <JackpotContent />
          </CSSTransition>
        )}
      </div>
    </div>
  );
};

export default OverView;
