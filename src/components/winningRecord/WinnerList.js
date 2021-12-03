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
import { _getWinListResponseStyle } from '../../utils/helper';

// React responsive
import { useMediaQuery } from 'react-responsive';

// Redux
import { useSelector } from 'react-redux';

// Moment
import moment from 'moment';

let index = 0;

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
    if (rows?.length === 10) {
      set(rows.slice(0, -1));
      // set([]);
    }
  }, [rows]);

  useEffect(() => {
    if (!winRecordList?.length) return;

    const randomCount = setInterval(() => {
      index++;

      if (index === winRecordList.length) index = 0;

      set([
        {
          id: uuidv4(),
          ip: winRecordList[index].egm_ip,
          jackpot: winRecordList[index].jackpot,
          created: winRecordList[index].created,
          place: winRecordList[index].place,
          level: winRecordList[index].level,
          num: index,
        },
        ...rows,
      ]);
    }, 3000);

    return () => {
      clearInterval(randomCount);
    };
  }, [rows, winRecordList]);

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
              padding: '1.5em',
              color:
                item.level === 'jackpot'
                  ? '#F70E06'
                  : item.level === 'secondPrize'
                  ? '#E93EEE'
                  : item.level === 'thirdPrize'
                  ? '#3881E0'
                  : item.level === 'fourthPrize'
                  ? '#39E743'
                  : item.level === 'fifthPrize'
                  ? '#F2F3F4'
                  : '#F2F3F4',
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
                    {item.level === 'jackpot'
                      ? 'JP-1'
                      : item.level === 'secondPrize'
                      ? 'JP-2'
                      : item.level === 'thirdPrize'
                      ? 'JP-3'
                      : item.level === 'fourthPrize'
                      ? 'JP-4'
                      : item.level === 'fifthPrize'
                      ? 'JP-5'
                      : 'JP-6'}
                  </p>
                </div>

                <div style={{ ...styles, width: '20%' }}>
                  <p>{`${item.place}-${item.num}`}</p>
                </div>

                <div style={{ ...styles }}>
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
