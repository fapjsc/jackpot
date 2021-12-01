import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

// Styles
import classes from './WinnerList2.module.scss';

const WinnerList2 = () => {
  const { winRecordList } = useSelector(state => state.jackpot);

  const el = winRecordList?.map(el => (
    <div key={el.id}>
      <p>{moment(el.created).format('YYYY-MM-DD')}</p>
      <p>{el.egm_ip.split('.')[3]}</p>
      <p>{el.place}</p>
      <p>{`$${el.jackpot}`}</p>
    </div>
  ));

  return <div className={classes.container}>{el}</div>;
};

export default WinnerList2;
