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
