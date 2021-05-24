/**
 *
 * arr.reduce(()=>{})
 */
const reduce = (arr, cb, initData) => {
  let sum = initData || arr.shift();
  for (i of arr) {
    sum = cb(sum, arr[i], i, arr[i], arr);
  }
  return sum;
};

// 用reduce实现一个数组拍平
const flat = (arr) => {
  return arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a.concat(flat(b));
    }
    return a.concat(b);
  }, []);
};
