import React from 'react';

// React responsive
import { useMediaQuery } from 'react-responsive';

// Odometer
import useOdometer from '../../hooks/useOdometer';
import '../../sass/odometer.scss';

const FlipNumber = ({ level, size, count, styles }) => {
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

  // mediumPoint
  //   ? console.log(mediumPoint, 'medium')
  //   : bigPoint
  //   ? console.log(bigPoint, 'big')
  //   : smallPoint
  //   ? console.log(smallPoint, 'small')
  //   : largePoint
  //   ? console.log(largePoint, 'large')
  //   : miniPoint
  //   ? console.log(miniPoint, 'miniPoint')
  //   : console.log('default');

  const odometerOptions = {
    duration: 300,
    format: '(,ddd).dddd',
  };

  useOdometer(
    targetRef,
    Number(count).toFixed(4) * 1 + 0.0001,
    odometerOptions
  );

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

    case 'level1':
      color = '#F70E06';
      break;

    case 'level2':
      color = '#E93EEE';
      break;

    case 'level3':
      color = '#3881E0';
      break;

    case 'level4':
      color = '#39E743';
      break;

    default:
      color = '#F2F3F4';
  }

  switch (size) {
    case 'jackpot':
      fontSize = miniPoint
        ? '6em'
        : largePoint
        ? '15em'
        : smallPoint
        ? '6.5em'
        : mediumPoint
        ? '7.5em'
        : bigPoint
        ? '8em'
        : '10em';
      break;

    case 'secondPrize':
      fontSize = miniPoint
        ? '5em'
        : largePoint
        ? '14em'
        : smallPoint
        ? '5.5em'
        : mediumPoint
        ? '6.5em'
        : bigPoint
        ? '7em'
        : '8.5em';
      break;

    case 'thirdPrize':
      fontSize = miniPoint
        ? '3.8em'
        : largePoint
        ? '9em'
        : smallPoint
        ? '4em'
        : mediumPoint
        ? '4.3em'
        : bigPoint
        ? '4.8em'
        : '6em';
      break;

    case 'fourthPrize':
      fontSize = miniPoint
        ? '3.8em'
        : largePoint
        ? '9em'
        : smallPoint
        ? '4em'
        : mediumPoint
        ? '4.3em'
        : bigPoint
        ? '4.8em'
        : '6em';
      break;

    //=== Side bar ===//
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
    <p
      className="target"
      ref={targetRef}
      style={{
        color,
        fontSize,
        ...styles,
        lineHeight: 0.9,
      }}
    />
  );
};

export default FlipNumber;
