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

export const _getLevelText = level => {
  switch (level) {
    case 'jackpot':
      return 'JP-1';

    case 'secondPrize':
      return 'JP-2';

    case 'thirdPrize':
      return 'JP-3';

    case 'fourthPrize':
      return 'JP-4';

    case 'fifthPrize':
      return 'JP-5';

    case 'sixthPrize':
      return 'JP-6';

    default:
      return '';
  }
};

export const _getAmount = amount => {
  console.log(amount);
  const amountNum = Number(amount).toFixed(4) * 1 + 0.0001;
  const amountText = String(amountNum);
  const formatAmountText = amountText.substring(0, amountText.length - 2);
  console.log(formatAmountText);
  return formatAmountText;
};
