export const _getWinListResponseStyle = devicesSize => {
  switch (devicesSize) {
    case 'large':
      return {
        fontSize: '2.5em',
        width: '28%',
      };

    case 'small':
      return {
        fontSize: '.9em',
        width: '28%',
      };

    default:
      return {
        fontSize: '1.4em',
        width: '28%',
      };
  }
};
