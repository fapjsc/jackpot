// Components
import FlipNumber from './flipNum/FlipNumber';

// Redux
import { useSelector } from 'react-redux';

// Style
import classes from './JackpotContent.module.scss';

const JackpotContent = () => {
  // Redux
  const { jackpotData } = useSelector(state => state.jackpot);
  // console.log(jackpotData);

  const jackpotEl =
    jackpotData &&
    Object.keys(jackpotData).map((key, index) => {
      if (index > 3) return null;

      const { jackpot, level } = jackpotData[key];
      return (
        <div key={index} className={classes[level]}>
          <FlipNumber
            level={level}
            size={level}
            count={Math.floor(jackpot * 100) / 100}
          />
        </div>
      );
    });

  return <div className={classes.container}>{jackpotEl}</div>;
};

export default JackpotContent;
