import React from 'react';
import PropTypes from 'prop-types';

const Space = ({
  children, positionH, positionV, style,
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent:
          // eslint-disable-next-line no-nested-ternary
          positionH === 'start' ? 'flex-start' : positionH === 'end' ? 'flex-end' : 'center',
      alignItems:
          // eslint-disable-next-line no-nested-ternary
          positionV === 'start' ? 'flex-start' : positionH === 'end' ? 'flex-end' : 'center',
      gap: '2rem',
      ...style,
    }}
  >
    {children}
  </div>
);

Space.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  positionH: PropTypes.string,
  positionV: PropTypes.string,
  style: PropTypes.string,

};

Space.defaultProps = {
  positionH: 'center',
  positionV: 'center',
  style: '',
};

export default Space;
