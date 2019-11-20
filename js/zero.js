var originCash = 500;
function updateEasyCard(cash) {
  cash = parseInt(cash);
  console.log(cash);
  
  // 當 cash 是數值或為 0 時，使用 cash 的數值
  // 如果 cash 是 NaN 時，則直接套用 500
  cash = (cash || cash === 0)? cash: 500;
 
  var money = cash + originCash;
  console.log('我有 ' + money + ' 元');
}
updateEasyCard(0);