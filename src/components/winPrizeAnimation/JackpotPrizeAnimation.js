import React, { useEffect, useState } from 'react';

import Firework from '../ui/Firework';

// import { useDispatch } from 'react-redux';

// actions
// import { setWinningPrizeData } from '../../store/actions/jackpotActions';

// Components
import FlipNumber from '../flipNum/FlipNumber';

// Hooks
import useHttp from '../../hooks/useHttp';

// Apis
import { jackpotHandPay } from '../../utils/api';

// Styles
import classes from './JackpotAnimation.module.scss';

const JackpotPrizeAnimation = ({ playAnimationItem }) => {
  // Init State
  const [count, setCount] = useState(0);

  // Redux
  // const dispatch = useDispatch();

  // Hooks
  const { sendRequest } = useHttp(jackpotHandPay);

  if (!playAnimationItem)
    playAnimationItem = {
      id: 134,
      inserId: 1394,
      cashInStatus: 'padding',
      level: 'jackpot',
      // level: 'secondPrize',
      // level: 'thirdPrize',
      // level: 'fourthPrize',
      // level: 'fifthPrize',
      // level: 'sixthPrize',
      ip: '192.168.10.30',
      amountWinning: 100,
    };

  const handleOnclick = () => {
    const data = {
      uuid: playAnimationItem?.id,
      insertId: playAnimationItem?.inserId,
    };
    sendRequest(data);
    // dispatch(
    //   setWinningPrizeData({
    //     ...playAnimationItem,
    //     cashInStatus: 'success',
    //   })
    // );
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
          <span
            style={{
              textShadow: '6px 10px 4px #000',
            }}
            level={playAnimationItem?.level}
          >
            $
          </span>
          <FlipNumber
            size={playAnimationItem.level}
            level={playAnimationItem.level}
            count={count}
            styles={{
              textShadow: '6px 10px 4px #000',
              padding: '.1em .3em',
            }}
          />
        </div>

        <Firework level={playAnimationItem.level} />
      </div>

      {/* <p style={{ color: '#fff' }}>{playAnimationItem?.level}</p> */}

      <div style={{ color: '#fff', position: 'fixed', bottom: 20, right: 20 }}>
        <h1>{playAnimationItem?.cashInStatus}</h1>
        <p>{playAnimationItem?.ip}</p>
        <p>{playAnimationItem?.level}</p>
        <p>{playAnimationItem?.amountWinning}</p>
        <p>{playAnimationItem?.id}</p>

        <button className={classes.raise} onClick={handleOnclick}>
          手動派彩
        </button>
      </div>
    </div>
  );
};

export default React.memo(JackpotPrizeAnimation);
