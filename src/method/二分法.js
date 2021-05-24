// 查找左边界 收缩右边界  mid target   12 333 4
function findLeftBorder(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function findRange(arr, target) {
  return [findLeftBorder(arr, target - 1), findLeftBorder(arr, target)].map(
    (x) => {
      return arr[x] === target ? x : -1;
    }
  );
}
