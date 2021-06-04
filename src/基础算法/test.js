// 1、For any date pair [date1, date2], write a function to return all the date between date1 and date2.
// For example, for input [‘2021-04-30’, ‘2021-05-03’], return [‘2021-04-30’, ‘2021-05-01’, ‘2021-05-02’, ‘2021-05-03’]。

function getMidDays(arr) {
  let startTime = new Date(arr[0]).getTime();
  let endTime = new Date(arr[1]).getTime();
  let res = [arr[0]];
  let cur = startTime;

  while (cur !== endTime) {
    cur += 1000 * 60 * 60 * 24;
    res.push(timestampToDate(cur));
  }
  console.log("res", res);
  res.push(arr[1]);
  return res;
}

function timestampToDate(timestamp) {
  const y = new Date(timestamp).getFullYear();
  const m = new Date(timestamp).getMonth() + 1;
  const d = new Date(timestamp).getDate();

  return `${y}-${m < 10 ? "0" + m : m}-${d}`;
}
getMidDays(["2021-02-27", "2021-03-01"]);

function longestSub(str) {
  let arr = [];
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let index = arr.indexOf(str[i]);
    if (index === -1) {
      arr.push(str[i]);
      max = Math.max(max, arr.length);
    } else {
      arr.splice(0, index + 1);
    }
  }
  return max;
}
