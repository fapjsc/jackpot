export const _getWinListResponseStyle = (devicesSize) => {
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

export const _getLevelText = (level) => {
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

export const _getLevelColor = (level) => {
  switch (level) {
    case 'jackpot':
      return '#F70E06';

    case 'secondPrize':
      return '#E93EEE';

    case 'thirdPrize':
      return '#3881E0';

    case 'fourthPrize':
      return '#39E743';

    case 'fifthPrize':
      return '#F2F3F4';

    case 'sixthPrize':
      return '#F2F3F4';

    default:
      return '';
  }
};

export const _getDecLength = (num) => {
  if (!num) return;
  return num.toString().split('.')[1].length;
};

export const _getAmount = (amount) => {
  if (!amount) return;

  const amountNum = (amount.toFixed(3) + 1) * 1;

  const validValueLength = _getDecLength(amountNum);

  if (validValueLength !== 4) { console.log(amountNum); }

  return amountNum;
};

export const _splitAmountToStr = (amount) => {
  if (!amount) return;

  const amountStr = String(amount);
  const formatAmountText = amountStr.substring(0, amountStr.length - 2);
  return formatAmountText;
};
