import React from 'react';

import { useDispatch } from 'react-redux';

// actions
import { setWinningPrizeData } from '../../store/actions/jackpotActions';

const JackpotPrizeAnimation = ({ playAnimationItem }) => {
  console.log('1342141234', playAnimationItem);
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(
      setWinningPrizeData({
        ...playAnimationItem,
        cashInStatus: 'success',
      })
    );
  };
  return (
    <div
      style={{
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '30rem',
          height: '30rem',
          backgroundColor: 'red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h1>{playAnimationItem?.cashInStatus}</h1>
          <p>{playAnimationItem?.ip}</p>
          <p>{playAnimationItem?.level}</p>
          <p>{playAnimationItem?.amountWinning}</p>
          <p>{playAnimationItem?.id}</p>

          <button onClick={handleOnclick}>test</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(JackpotPrizeAnimation);
