import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

// actions
import { setWinningPrizeData } from '../../store/actions/jackpotActions';

// import imgObj from '../../assets/winPrize/secondPrize.png';

import FlipNumber from '../flipNum/FlipNumber';

// Styles
import classes from './JackpotAnimation.module.scss';

const JackpotPrizeAnimation = ({ playAnimationItem }) => {
  // Init State
  const [count, setCount] = useState(0);

  // Redux
  const dispatch = useDispatch();

  if (!playAnimationItem)
    playAnimationItem = {
      id: 134,
      cashInStatus: 'padding',
      level: 'level1',
      ip: '192.168.10.30',
      amountWinning: 100,
    };

  const handleOnclick = () => {
    dispatch(
      setWinningPrizeData({
        ...playAnimationItem,
        cashInStatus: 'success',
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setCount(playAnimationItem.amountWinning);
    }, 500);
  }, [playAnimationItem.amountWinning]);

  return (
    <div className={classes.container}>
      <div level={playAnimationItem?.level} className={classes.animationBox}>
        <div className={classes.winNumberBox}>
          <span level={playAnimationItem?.level}>$</span>
          <FlipNumber
            level={playAnimationItem?.level}
            count={count}
            styles={{ fontSize: '10em' }}
          />
        </div>
      </div>

      {/* <p style={{ color: '#fff' }}>{playAnimationItem?.level}</p> */}

      <div style={{ color: '#fff', position: 'fixed', bottom: 0, right: 0 }}>
        <h1>{playAnimationItem?.cashInStatus}</h1>
        <p>{playAnimationItem?.ip}</p>
        <p>{playAnimationItem?.level}</p>
        <p>{playAnimationItem?.amountWinning}</p>
        <p>{playAnimationItem?.id}</p>

        <button onClick={handleOnclick}>test</button>
      </div>
    </div>
  );
};

export default React.memo(JackpotPrizeAnimation);
