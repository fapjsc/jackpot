import React from 'react';
// import PropTypes from 'prop-types';

const Space = ({ children, positionH, positionV, style }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent:
          positionH === 'start' ? 'flex-start' : positionH === 'end' ? 'flex-end' : 'center',
        alignItems:
          positionV === 'start' ? 'flex-start' : positionH === 'end' ? 'flex-end' : 'center',
        gap: '2rem',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Space;
