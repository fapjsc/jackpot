// Components
import FlipNumber from './flipNum/FlipNumber';

// Redux
import { useSelector } from 'react-redux';

// Style
import classes from './SideBar.module.scss';

const SideBar = () => {
  // Redux
  const { jackpotData } = useSelector(state => state.jackpot);

  const jackpotEl =
    jackpotData &&
    Object.keys(jackpotData).map((key, index) => {
      const { jackpot, level } = jackpotData[key];
      // console.log(jackpot, level, 'origin');
      // console.log(Math.floor(jackpot * 100) / 100, level, 'toFixed');
      return (
        <div key={index} className={`${classes[level]}`}>
          <FlipNumber size="side-bar" count={jackpot} level={level} />
        </div>
      );
    });

  // const testEl = <FlipNumber size="side-bar" count={testCount} />;

  return (
    <div className={classes.sideBarContainer}>
      <section className={classes.flipNumberBox}>{jackpotEl}</section>
    </div>
  );
};

export default SideBar;
