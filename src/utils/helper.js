export const _getWinListResponseStyle = devicesSize => {
  switch (devicesSize) {
    case 'large':
      return {
        fontSize: '3em',
        width: '25%',
      };

    case 'small':
      return {
        fontSize: '.9em',
        width: '25%',
      };

    default:
      return {
        fontSize: '1.4em',
        width: '25%',
      };
  }
};
