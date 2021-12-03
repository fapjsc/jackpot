const SERVER = 'http://192.168.10.119:3030';

// 手動獲取中獎清單
export const getWinRecordList = async () => {
  const url = `${SERVER}/test/jackpotRecord`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) throw new Error('Could not fetch agent server');
  return data;
};

// 手動派彩
export const jackpotHandPay = async reqData => {
  const { insertId, uuid } = reqData;
  // console.log(insertId, uuid);
  const url = `${SERVER}/test/jackpotHandPay`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      insertId,
      uuid,
    }),
  });

  const data = await response.json();

  // console.log(data);

  if (!response.ok) throw new Error('Could not fetch agent server');

  return data;
};
