import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

// Toast
import { toast } from 'react-toastify';

// actions
import { setShowToast } from '../../store/actions/jackpotActions';

// Components
import FlipNumber from '../flipNum/FlipNumber';
import Firework from '../ui/Firework';
// import Space from '../ui/Space';
import TextAnimation from '../ui/TextAnimation';

// Hooks
import useHttp from '../../hooks/useHttp';

// Apis
import { jackpotHandPay } from '../../utils/api';

// Helpers
import {
  _getLevelText,
  _getAmount,
  _splitAmountToStr,
  _getLevelColor,
} from '../../utils/helper';

// Styles
import classes from './JackpotAnimation.module.scss';

// eslint-disable-next-line
const JackpotPrizeAnimation = ({ playAnimationItem, setWinPrize }) => {
  if (!playAnimationItem) {
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
  }
  // Init State
  const [count, setCount] = useState(0);
  const [enableBtn, setEnableBtn] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const { showToast } = useSelector((state) => state.jackpot);

  // Hooks
  const {
    sendRequest, data: message, status, error,
  } = useHttp(jackpotHandPay);

  const handleCashInOnclick = () => {
    setEnableBtn(false);
    const data = {
      uuid: playAnimationItem?.id,
      insertId: playAnimationItem?.inserId,
    };
    sendRequest(data);
  };

  useEffect(() => {
    if (playAnimationItem?.cashInStatus === 'fail') setEnableBtn(true);
  }, [playAnimationItem]);

  useEffect(() => {
    console.log(message, status, error);
  }, [message, status, error]);

  useEffect(() => {
    if (!playAnimationItem?.amountWinning) return;

    setCount(_getAmount(+playAnimationItem.amountWinning));
  }, [playAnimationItem]);

  useEffect(() => {
    if (!showToast) return;

    if (showToast?.show) {
      const amount = _getAmount(showToast.data.amountWinning);
      const textColor = _getLevelColor(showToast.data.level);

      const Msg = () => (
        <div>
          <span>
            ???? ??????
            {showToast.data.ip}
            {' '}
            -
          </span>

          <span>
            ??????
            {_getLevelText(showToast.data.level)}
            {' '}
            -
          </span>

          <span>
            ?????? $
            {_splitAmountToStr(amount)}
          </span>
        </div>
      );

      toast(<Msg />, {
        autoClose: 5000,
        toastId: showToast.data.id,
        style: {
          backgroundColor: 'rgba(0,0,0,.5)',
          color: textColor,
          fontWeight: 'bold',
        },
      });

      dispatch(setShowToast({ show: false, data: null }));
    }
  }, [showToast, dispatch]);

  const buttonTxt = () => {
    if (error) {
      return '????????????, ????????????';
    }

    if (playAnimationItem?.cashInStatus === 'success') {
      return '????????????';
    }

    if (status === 'pending' || !enableBtn) {
      return '?????????...';
    }

    return '????????????';
  };

  return (
    <div className={classes.container}>
      <div level={playAnimationItem?.level} className={classes.animationBox}>
        <div
          level={playAnimationItem?.level}
          className={classes.textAnimationBox}
        >
          <TextAnimation machineNum={playAnimationItem?.name} />
        </div>
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
            size={playAnimationItem?.level}
            level={playAnimationItem?.level}
            count={count}
            styles={{
              textShadow: '6px 10px 4px #000',
              padding: '.1em .3em',
              fontSize: '9rem',
              lineHeight: 1.2,
            }}
          />
        </div>
        <Firework level={playAnimationItem?.level} />
      </div>

      <div
        style={{
          color: '#fff',
          position: 'fixed',
          bottom: 20,
          width: '70%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 1rem',
        }}
      >

        <button type="button" className={classes.raise} onClick={() => setWinPrize(false)}>
          ????????????
        </button>

        <button
          type="button"
          disabled={!enableBtn}
          className={classes.raise}
          onClick={handleCashInOnclick}
        >
          {buttonTxt()}
        </button>
      </div>
    </div>
  );
};

JackpotPrizeAnimation.propTypes = {
  playAnimationItem: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    cashInStatus: PropTypes.string,
    level: PropTypes.string,
    amountWinning: PropTypes.number,
    inserId: PropTypes.number,
  }).isRequired,

  // setWinPrize: PropTypes.func.isRequired,
};

export default React.memo(JackpotPrizeAnimation);
