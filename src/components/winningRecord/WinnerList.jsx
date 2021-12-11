import React, { useState, useEffect } from 'react';

// React Spring
import { useTransition, animated } from 'react-spring';

// uuid
import { v4 as uuidv4 } from 'uuid';

// React responsive
import { useMediaQuery } from 'react-responsive';

// Redux
import { useSelector } from 'react-redux';

// Moment
import moment from 'moment';

// Styles
import classes from './WinnerList.module.scss';

// Helpers
import {
  _getWinListResponseStyle,
  _getLevelText,
  _getLevelColor,
} from '../../utils/helper';

// Components
import Space from '../ui/Space';

let index = 0;

const WinnerList = () => {
  // Redux
  const { winRecordList } = useSelector((state) => state.jackpot);

  // Media Query
  const smallPoint = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  const largePoint = useMediaQuery({
    query: '(min-width: 2000px)',
  });

  // React Spring Flip
  const data = [];
  const [rows, set] = useState(data);

  const height = 35;

  const transitions = useTransition(
    rows.map((d, i) => ({ ...d, y: i * height })),
    (d) => d.id,
    {
      from: { position: 'absolute', opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
      // eslint-disable-next-line comma-dangle
    }
  );

  useEffect(() => {
    if (rows?.length === 6) {
      set(rows.slice(0, -1));
      // set([]);
    }
  }, [rows]);

  useEffect(() => {
    if (!winRecordList?.length) return;

    const randomCount = setInterval(() => {
      index += 1;

      if (index === winRecordList.length) index = 0;

      set([
        {
          id: uuidv4(),
          jackpot: winRecordList[index].jackpot,
          created: winRecordList[index].created,
          place: winRecordList[index].place,
          level: winRecordList[index].level,
          name: winRecordList[index].name,
          // ip: winRecordList[index].egm_ip,
          // num: index,
        },
        ...rows,
      ]);
    }, 3000);

    return () => {
      clearInterval(randomCount);
    };
  }, [rows, winRecordList]);

  let styles;

  if (largePoint) {
    styles = _getWinListResponseStyle('large');
  } else if (smallPoint) {
    styles = _getWinListResponseStyle('small');
  } else {
    styles = _getWinListResponseStyle();
  }

  // largePoint
  //   ? (styles = _getWinListResponseStyle('large'))
  //   : smallPoint
  //   ? (styles = _getWinListResponseStyle('small'))
  //   : (styles = _getWinListResponseStyle());

  return (
    <div className={classes.container}>
      {transitions.map(({ item, props: { y, ...rest }, key }, index2) => (
        <animated.div
          key={key}
          className="card"
          num={index2}
          style={{
            // eslint-disable-next-line no-shadow
            transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
            width: '100%',
            padding: '1.5em',
            color: _getLevelColor(item.level),

            ...rest,
          }}
        >
          {styles && (
            <Space positionH="start">
              <div style={{ ...styles, width: '25%' }}>
                <p>{moment(item.created).format('YYYY-MM-DD')}</p>
              </div>

              <div
                style={{
                  ...styles,
                  width: '10%',
                }}
              >
                <p>
                  {_getLevelText(item.level)}
                </p>
              </div>

              <div style={{ ...styles, width: '20%' }}>
                <p>{`${item.place}-${item.name}`}</p>
              </div>

              <div style={{ ...styles }}>
                <p>{`$${item.jackpot}`}</p>
              </div>
            </Space>
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default WinnerList;
