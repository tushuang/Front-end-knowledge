// function getRgbColor(str) {
//   str = str[0] === "#" ? str.slice(1) : str;
//   if (str.length == 3) {
//     str = str[0] + str[0] + str[1] + str[1] + str[2] + str[2];
//   }

//   let arr = str.split("");
//   let n1 = parseInt(arr.splice(0, 2).join(""), 16);
//   let n2 = parseInt(arr.splice(0, 2).join(""), 16);
//   let n3 = parseInt(arr.splice(0).join(""), 16);
//   return `rgb(${n1},${n2},${n3})`;
// }

// console.log(getRgbColor("#fff"));

// 0 1 1 2 3
function getTargetIndex() {
  let num = [0, 1, 1];
  return (fn = (target) => {
    if (num.length >= target) {
      return num[target];
    }
    for (let i = num.length; i <= target; i++) {
      num[i] = num[i - 1] + num[i - 2];
    }
    return num[target];
  });
}
const numArr = getTargetIndex();
numArr(5);

// function getNumType(data) {
//   console.log(Object.prototype.toString.call(data));
// }

// console.log(getNumType(1));
