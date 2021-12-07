import React from 'react';

import PropTypes from 'prop-types';

// React responsive
import { useMediaQuery } from 'react-responsive';

import { _getLevelColor } from '../../utils/helper';

// Odometer
import useOdometer from '../../hooks/useOdometer';
import '../../sass/odometer.scss';

const FlipNumber = ({
  level, size, count, styles,
}) => {
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

  useOdometer(targetRef, count, odometerOptions);
  // useOdometer(targetRef, Number(count).toFixed(4) * 1 + 0.0001, odometerOptions);

  const color = _getLevelColor(level);
  let fontSize;

  switch (size) {
    case 'jackpot':
      if (miniPoint) { fontSize = '6em'; break; }
      if (largePoint) { fontSize = '15em'; break; }
      if (smallPoint) { fontSize = '6.5em'; break; }
      if (mediumPoint) { fontSize = '7.5em'; break; }
      if (bigPoint) { fontSize = '8em'; break; }

      fontSize = '10em';

      break;

    case 'secondPrize':
      if (miniPoint) { fontSize = '5em'; break; }
      if (largePoint) { fontSize = '14em'; break; }
      if (smallPoint) { fontSize = '5.5em'; break; }
      if (mediumPoint) { fontSize = '6.5em'; break; }
      if (bigPoint) { fontSize = '7em'; break; }

      fontSize = '8.5em';

      break;

    case 'thirdPrize':
      if (miniPoint) { fontSize = '3.8em'; break; }
      if (largePoint) { fontSize = '9em'; break; }
      if (smallPoint) { fontSize = '4em'; break; }
      if (mediumPoint) { fontSize = '4.3em'; break; }
      if (bigPoint) { fontSize = '4.8em'; break; }

      fontSize = '6em';

      break;

    case 'fourthPrize':
      if (miniPoint) { fontSize = '3.8em'; break; }
      if (largePoint) { fontSize = '9em'; break; }
      if (smallPoint) { fontSize = '4em'; break; }
      if (mediumPoint) { fontSize = '4.3em'; break; }
      if (bigPoint) { fontSize = '4.8em'; break; }

      fontSize = '6em';

      break;

    case 'fifthPrize':
      if (miniPoint) { fontSize = '3.8em'; break; }
      if (largePoint) { fontSize = '9em'; break; }
      if (smallPoint) { fontSize = '4em'; break; }
      if (mediumPoint) { fontSize = '4.3em'; break; }
      if (bigPoint) { fontSize = '4.8em'; break; }

      fontSize = '6em';

      break;

    case 'sixthPrize':
      if (miniPoint) { fontSize = '3.8em'; break; }
      if (largePoint) { fontSize = '9em'; break; }
      if (smallPoint) { fontSize = '4em'; break; }
      if (mediumPoint) { fontSize = '4.3em'; break; }
      if (bigPoint) { fontSize = '4.8em'; break; }

      fontSize = '6em';

      break;

    //=== Side bar ===//
    case 'side-bar':
      if (miniPoint) { fontSize = '1.8rem'; break; }
      if (largePoint) { fontSize = '6,2rem'; break; }
      if (smallPoint) { fontSize = '2.4rem'; break; }
      if (mediumPoint) { fontSize = '2.8rem'; break; }
      if (bigPoint) { fontSize = '3.1rem'; break; }

      fontSize = '3.8rem';

      break;

    default:
      fontSize = '3.6rem';
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

FlipNumber.propTypes = {
  level: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  styles: PropTypes.shape(),
};

FlipNumber.defaultProps = {
  styles: {},
};

export default FlipNumber;
