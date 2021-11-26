import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
// import shuffle from 'lodash/shuffle';

import classes from './WinnerList.module.scss';
// import { devToolsEnhancer } from 'redux-devtools-extension';

import Space from '../ui/Space';

// Helpers
import randomName from '../../utils/randomName';
import consoleRandomDate from '../../utils/randomDate';
import { _getWinListResponseStyle } from '../../utils/helper';

// React responsive
import { useMediaQuery } from 'react-responsive';

// Antd
// import { Space, List, Typography, Divider } from 'antd';

const WinnerList = () => {
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

  const height = 30;

  const transitions = useTransition(
    rows.map((data, i) => ({ ...data, y: i * height })),
    d => d.name,
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
    const randomCount = setInterval(() => {
      set([
        {
          name: randomName.getName(),
          money: Math.floor(Math.random() * 100000),
          date: consoleRandomDate(),
          location: Math.floor(Math.random() * 10) + 1,
        },
        ...rows,
      ]);
    }, 2000);

    return () => {
      clearInterval(randomCount);
    };
  }, [rows]);

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
                  <p>{item.date}</p>
                </div>

                <div style={styles}>
                  <p>場地 {item.location}</p>
                </div>

                <div style={styles}>
                  <p>{item.name}</p>
                </div>

                <div style={styles}>
                  <p>{`$${item.money}`}</p>
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
