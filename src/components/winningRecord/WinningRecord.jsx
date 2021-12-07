import React from 'react';
import classes from './WinningRecord.module.scss';

import WinnerList from './WinnerList';

const WinningRecord = () => (
  <div className={classes.winningRecordContainer}>
    <WinnerList />
  </div>
);

export default WinningRecord;
