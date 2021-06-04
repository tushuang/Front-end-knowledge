/*
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
 */

// function flat(arr) {
//   return arr.reduce((x, y) => {
//     Array.isArray(y) ? x.push(...flat(y)) : x.push(y);
//     return x;
//   }, []);
// }

function flat(arr) {
  let res = [];
  let target = [];
  res.push(arr.shift());
  for (let j = 0; j < res.length; j++) {
    if (Array.isArray(res[j])) {
      res.push(...res[j]);
    } else {
      target.push(res[j]);
    }
    if (j === res.length - 1 && arr.length) {
      res.push(arr.shift());
    }
  }
  return target;
}

console.log("flat", flat([1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]));
