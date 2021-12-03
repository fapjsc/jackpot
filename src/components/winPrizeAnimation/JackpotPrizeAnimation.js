import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// actions
import { setShowToast } from '../../store/actions/jackpotActions';

// Components
import FlipNumber from '../flipNum/FlipNumber';
import Firework from '../ui/Firework';
import Space from '../ui/Space';

// Hooks
import useHttp from '../../hooks/useHttp';

// Apis
import { jackpotHandPay } from '../../utils/api';

// Helpers
import { _getLevelText, _getAmount } from '../../utils/helper';

// Toast
import { toast } from 'react-toastify';

// Styles
import classes from './JackpotAnimation.module.scss';

const JackpotPrizeAnimation = ({ playAnimationItem, setWinPrize }) => {
  // Init State
  const [count, setCount] = useState(0);
  const [enableBtn, setEnableBtn] = useState(true);

  // Redux
  const dispatch = useDispatch();
  const { showToast } = useSelector(state => state.jackpot);

  // Hooks
  const { sendRequest, data: message, status, error } = useHttp(jackpotHandPay);

  if (!playAnimationItem)
    playAnimationItem = {
      id: 123456789,
      amountWinning: 100,
      inserId: 1394,
      cashInStatus: 'padding',
      level: 'jackpot',
      // level: 'secondPrize',
      // level: 'thirdPrize',
      // level: 'fourthPrize',
      // level: 'fifthPrize',
      // level: 'sixthPrize',
      ip: '192.168.10.30',
    };

  const handleCashInOnclick = () => {
    setEnableBtn(false);
    const data = {
      uuid: playAnimationItem?.id,
      insertId: playAnimationItem?.inserId,
    };
    sendRequest(data);

    setTimeout(() => {
      setEnableBtn(true);
    }, 1000 * 10);
  };

  useEffect(() => {
    console.log(message, status, error);
  }, [message, status, error]);

  useEffect(() => {
    setTimeout(() => {
      setCount(playAnimationItem.amountWinning);
    }, 500);
  }, [playAnimationItem.amountWinning]);

  useEffect(() => {
    if (showToast?.show) {
      // console.log(showToast.data.amountWinning);
      const amount = _getAmount(showToast.data.amountWinning);
      // console.log(amount, showToast.data.amountWinning);
      toast(
        `👏  恭喜 ${showToast.data.ip} 獲得 ${_getLevelText(
          showToast.data.level
        )} 獎金 $${amount}`,
        { autoClose: 10000 }
      );

      dispatch(setShowToast({ show: false, data: null }));
    }
  }, [showToast, dispatch]);

  return (
    <div className={classes.container}>
      <div level={playAnimationItem?.level} className={classes.animationBox}>
        <div className={classes.winNumberBox} level={playAnimationItem?.level}>
          <span
            style={{
              textShadow: '6px 10px 4px #000',
              fontSize: '9rem',
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
              fontSize: '9rem',
              lineHeight: 1.2,
            }}
          />
        </div>

        <Firework level={playAnimationItem.level} />
      </div>

      <div
        style={{
          color: '#fff',
          position: 'fixed',
          bottom: 20,
          right: 20,
        }}
      >
        {/* <p>{playAnimationItem?.ip}</p>
        <p>{playAnimationItem?.level}</p>
        <p>{playAnimationItem?.amountWinning}</p> */}

        <button
          disabled={status === 'pending' || !enableBtn}
          className={classes.raise}
          onClick={handleCashInOnclick}
        >
          {status === 'pending' || !enableBtn
            ? '請稍等...'
            : error
            ? '派彩失敗, 再試一次'
            : '手動派彩'}
        </button>

        <br />

        <Space>
          <p>{playAnimationItem?.cashInStatus}</p>
          <p>
            {String(playAnimationItem?.id).substring(
              String(playAnimationItem?.id).length - 5
            )}
          </p>
        </Space>

        {/* <button className={classes.raise} onClick={() => setWinPrize(false)}>
          強制關閉
        </button> */}
      </div>
    </div>
  );
};

export default React.memo(JackpotPrizeAnimation);
