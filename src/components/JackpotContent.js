// Components
import FlipNumber from './flipNum/FlipNumber';

// Redux
import { useSelector } from 'react-redux';

// Style
import classes from './JackpotContent.module.scss';

// React responsive
// import { useMediaQuery } from 'react-responsive';

const JackpotContent = () => {
  // Redux
  const { jackpotData } = useSelector(state => state.jackpot);

  const jackpotEl =
    jackpotData &&
    Object.keys(jackpotData).map((key, index) => {
      if (index > 3) return null;

      const { jackpot, level } = jackpotData[key];
      return (
        <div key={index} className={classes[level]}>
          <div>
            <img
              src={
                require(`../assets/overView/${level}.gif`).default
                  ? require(`../assets/overView/${level}.gif`).default
                  : null
              }
              alt={`level-${level}`}
              style={{ width: '10rem' }}
            />
            <FlipNumber level={level} size={level} count={jackpot} content />
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
