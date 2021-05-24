/**
 * 99+9
 */
// const addLargeNumber = (num1, num2) => {
//   let i = num1.length - 1;
//   let j = num2.length - 1;
//   let add = 0;
//   let res = "";
//   while (i >= 0 || j >= 0) {
//     let sum = (+num1[i] || 0) + (+num2[j] || 0) + add;
//     add = 0;
//     if (sum > 9) {
//       add = 1;
//       sum = sum - 10;
//     }
//     res = sum + res;
//     i--;
//     j--;
//   }
//   if (add) {
//     res = add + res;
//   }
//   return res;
// };

const addLargeNum = (n1, n2) => {
  let add = 0;
  let sum = "";
  let i = n1.length - 1;
  let j = n2.length - 1;
  while (i >= 0 || j >= 0) {
    let num = (+n1[i] || 0) + (+n2[j] || 0) + add;
    add = 0;
    if (num > 9) {
      add = 1;
      num = num - 10;
    }
    sum = num + sum;
    i--;
    j--;
  }
  if (add) {
    sum = add + sum;
  }
  return sum;
};
console.log("addLargeNum", addLargeNum("99", "1"));
