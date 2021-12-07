// Redux
import React, { useSelector } from 'react-redux';

// Components
import FlipNumber from './flipNum/FlipNumber';

// Style
import classes from './JackpotContent.module.scss';

// Helper
import { _getAmount } from '../utils/helper';

// Images
import jp1 from '../assets/overView/jackpot.gif';
import jp2 from '../assets/overView/secondPrize.gif';
import jp3 from '../assets/overView/thirdPrize.gif';
import jp4 from '../assets/overView/fourthPrize.gif';

const JackpotContent = () => {
  let imgObj;

  // Redux
  const { jackpotData } = useSelector((state) => state.jackpot);

  const jackpotEl = jackpotData && Object.keys(jackpotData).map((key, index) => {
    if (index > 3) return null;

    const { jackpot, level } = jackpotData[key];

    if (level === 'jackpot') imgObj = jp1;
    if (level === 'secondPrize') imgObj = jp2;
    if (level === 'thirdPrize') imgObj = jp3;
    if (level === 'fourthPrize') imgObj = jp4;

    return (
      <div key={level} className={classes[level]}>
        <div>
          <img
            src={imgObj}
            alt={`level-${level}`}
            style={{ width: '10rem' }}
          />
          <FlipNumber level={level} size={level} count={_getAmount(jackpot)} />
        </div>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.box}>{jackpotEl}</div>
    </div>
  );
};

export default JackpotContent;
