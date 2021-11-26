import classes from './WinningRecord.module.scss';

import WinnerList from './WinnerList';

const WinningRecord = () => {
  return (
    <div className={classes.winningRecordContainer}>
      <WinnerList />
    </div>
  );
};

export default WinningRecord;
