export const getWinRecordList = async () => {
  const url = 'http://192.168.10.200:3030/test/jackpotRecord';
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) throw new Error('Could not fetch agent server');
  return data;
};
