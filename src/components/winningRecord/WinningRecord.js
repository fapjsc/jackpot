import classes from './WinningRecord.module.scss';

import WinnerList from './WinnerList';
import WinnerList2 from './WinnerList2';

const WinningRecord = () => {
  return (
    <div className={classes.winningRecordContainer}>
      {/* <WinnerList2 /> */}

      <WinnerList />
    </div>
  );
};

export default WinningRecord;
