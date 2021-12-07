import React from 'react';
import PropTypes from 'prop-types';
import classes from './TextAnimation.module.scss';

const TextAnimation = ({ machineNum }) => (
  <div className={classes['text-hero']}>
    <h1 className={classes.text}>{machineNum}</h1>
  </div>
);

TextAnimation.propTypes = {
  machineNum: PropTypes.string.isRequired,
};

export default TextAnimation;
