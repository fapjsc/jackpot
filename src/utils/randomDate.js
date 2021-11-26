import moment from 'moment';

const consoleRandomDate = () => {
  var maxdaterandom = new Date().getTime();
  var mindaterandom = new Date(2020, 0, 1, 8).getTime();
  var randomdate = getRandom(mindaterandom, maxdaterandom);
  var datestr = moment(randomdate).format('YYYY-MM-DD');
  //   console.log(datestr);
  return datestr;
};

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default consoleRandomDate;
