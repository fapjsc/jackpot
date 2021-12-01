import { useState, useEffect } from 'react';

// React Spring
import { useTransition, animated } from 'react-spring';

// Styles
import classes from './WinnerList.module.scss';

// Components
import Space from '../ui/Space';

// uuid
import { v4 as uuidv4 } from 'uuid';

// Helpers
import randomName from '../../utils/randomName';
import consoleRandomDate from '../../utils/randomDate';
import { _getWinListResponseStyle } from '../../utils/helper';

// React responsive
import { useMediaQuery } from 'react-responsive';

// Redux
import { useSelector } from 'react-redux';

// Moment
import moment from 'moment';

let tempArr = [];

const WinnerList = () => {
  // Redux
  const { winRecordList } = useSelector(state => state.jackpot);

  // Media Query
  const smallPoint = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  const largePoint = useMediaQuery({
    query: '(min-width: 2000px)',
  });

  // React Spring Flip
  let data = [];
  const [rows, set] = useState(data);

  const height = 40;

  const transitions = useTransition(
    rows.map((data, i) => ({ ...data, y: i * height })),
    d => d.id,
    {
      from: { position: 'absolute', opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
    }
  );

  useEffect(() => {
    if (rows?.length > 5) {
      set(rows.slice(0, -1));
    }
  }, [rows]);

  useEffect(() => {
    if (!winRecordList?.length) return;

    const randomCount = setInterval(() => {
      const randomNum = _generateTargetNum(0, winRecordList.length - 1);

      if (tempArr.includes(randomNum)) return;

      if (tempArr.length >= 6) {
        tempArr = [];
      }

      tempArr.push(randomNum);

      console.log(tempArr);

      set([
        {
          id: uuidv4(),
          ip: winRecordList[randomNum].egm_ip,
          jackpot: winRecordList[randomNum].jackpot,
          created: winRecordList[randomNum].created,
          place: winRecordList[randomNum].place,
          num: randomNum,
        },
        ...rows,
      ]);
    }, 2000);

    return () => {
      clearInterval(randomCount);
    };
  }, [rows, winRecordList]);

  const _generateTargetNum = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let styles;

  largePoint
    ? (styles = _getWinListResponseStyle('large'))
    : smallPoint
    ? (styles = _getWinListResponseStyle('small'))
    : (styles = _getWinListResponseStyle());

  return (
    <div className={classes.container}>
      {transitions.map(({ item, props: { y, ...rest }, key }, index) => {
        return (
          <animated.div
            key={key}
            className="card"
            style={{
              transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
              width: '100%',
              padding: '1em',
              ...rest,
            }}
          >
            {styles && (
              <Space positionH="start">
                <div style={styles}>
                  <p>{moment(item.created).format('YYYY-MM-DD')}</p>
                  {/* <p>{consoleRandomDate(item.created)}</p> */}
                </div>

                <div style={styles}>
                  <p>{`${item.place} (${item.num})`}</p>
                </div>

                <div style={styles}>
                  <p>{item.ip}</p>
                </div>

                <div style={styles}>
                  <p>{`$${item.jackpot}`}</p>
                </div>
              </Space>
            )}
          </animated.div>
        );
      })}
    </div>
  );
};

export default WinnerList;
