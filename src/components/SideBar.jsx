import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import FlipNumber from './flipNum/FlipNumber';

// Helpers
import { _getAmount } from '../utils/helper';

// Style
import classes from './SideBar.module.scss';

const SideBar = () => {
  // Redux
  const { jackpotData } = useSelector((state) => state.jackpot);

  const jackpotEl = jackpotData && Object.keys(jackpotData).map((key) => {
    const { jackpot, level } = jackpotData[key];

    return (
      <div key={level} className={`${classes[level]}`}>
        <FlipNumber size="side-bar" count={_getAmount(jackpot)} level={level} />
      </div>
    );
  });

  return (
    <div className={classes.sideBarContainer}>
      <div className={classes.moneyBox}>
        <div className={classes.moneyAnimation} />
      </div>
      <section className={classes.flipNumberBox}>{jackpotEl}</section>
    </div>
  );
};

export default SideBar;
