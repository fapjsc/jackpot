import React from 'react';
import otherImg from '../../assets/winPrizeAnimation/other-bg.gif';
import thirdPrizeImg from '../../assets/winPrizeAnimation/thirdPrize-bg.gif';
import secondPrizeImg from '../../assets/winPrizeAnimation/secondPrize-bg.gif';
import jackpotImg from '../../assets/winPrizeAnimation/jackpot-bg.gif';

const Firework = ({ level }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          level === 'jackpot'
            ? jackpotImg
            : level === 'secondPrize'
            ? secondPrizeImg
            : level === 'thirdPrize'
            ? thirdPrizeImg
            : otherImg
        })`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',

        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        // backgroundColor: '#3D0806',
        opacity: '.25',
      }}
    ></div>
  );
};

export default Firework;
