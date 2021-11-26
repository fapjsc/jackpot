import React from 'react';

// React responsive
import { useMediaQuery } from 'react-responsive';

// Odometer
import useOdometer from '../../hooks/useOdometer';
import '../../sass/odometer.scss';

const FlipNumber = ({ level, size, count }) => {
  const targetRef = React.useRef(null);

  // Media Query
  const bigPoint = useMediaQuery({
    query: '(max-width: 1440px)',
  });

  const mediumPoint = useMediaQuery({
    query: '(max-width: 1280px)',
  });

  const smallPoint = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  const largePoint = useMediaQuery({
    query: '(min-width: 2000px)',
  });

  const miniPoint = useMediaQuery({
    query: '(max-width: 900px)',
  });

  // console.log(bigPoint, 'big');
  // console.log(mediumPoint, 'medium');
  // console.log(smallPoint, 'small');
  // console.log(largePoint, 'large');
  // console.log(miniPoint, 'miniPoint');

  const odometerOptions = {
    duration: 300,
    format: '(,ddd).dddd',
  };

  useOdometer(targetRef, count.toFixed(4) * 1 + 0.0001, odometerOptions);

  let color;
  let fontSize;

  switch (level) {
    case 'jackpot':
      color = '#F70E06';
      break;
    case 'secondPrize':
      color = '#E93EEE';
      break;

    case 'thirdPrize':
      color = '#3881E0';
      break;

    case 'fourthPrize':
      color = '#39E743';
      break;

    default:
      color = '#F2F3F4';
  }

  switch (size) {
    case 'jackpot':
      fontSize = miniPoint
        ? '6rem'
        : largePoint
        ? '19rem'
        : smallPoint
        ? '7.5rem'
        : mediumPoint
        ? '7.8rem'
        : bigPoint
        ? '8.3rem'
        : '10rem';
      break;

    case 'secondPrize':
      fontSize = miniPoint
        ? '5.5rem'
        : largePoint
        ? '15rem'
        : smallPoint
        ? '7rem'
        : mediumPoint
        ? '7.8rem'
        : bigPoint
        ? '8.3rem'
        : '9.5rem';
      break;

    case 'thirdPrize':
      fontSize = miniPoint
        ? '4rem'
        : largePoint
        ? '9rem'
        : smallPoint
        ? '4.5rem'
        : mediumPoint
        ? '5.5rem'
        : '6rem';
      break;

    case 'fourthPrize':
      fontSize = miniPoint
        ? '4rem'
        : largePoint
        ? '9rem'
        : smallPoint
        ? '4.5rem'
        : mediumPoint
        ? '5.5rem'
        : '6rem';
      break;

    case 'side-bar':
      fontSize = miniPoint
        ? '2rem'
        : largePoint
        ? '6.5rem'
        : smallPoint
        ? '2.6rem'
        : mediumPoint
        ? '3rem'
        : bigPoint
        ? '3.5rem'
        : '4.2rem';
      break;

    default:
      fontSize = '4rem';
  }

  return (
    <div>
      <p className="target" ref={targetRef} style={{ color, fontSize }} />
    </div>
  );
};

export default FlipNumber;
