/**
 * 设置一个哈希表
 * 遍历数组 用sum - 当前值 并在哈希表里查找对应的值 如果有的话 说明条件成立可以放入数组
 */

function numsSum(arr, sum) {
  let map = new Map();
  let res = [];
  for (let item of arr) {
    let target = sum - item;
    if (map.has(target) && map.get(item) !== 0) {
      map.set(target, 0);
      map.set(item, 0);
      res.push([item, target]);
    } else if (map.get(item) !== 0) {
      map.set(item, 1);
    }
  }
  console.log("res", ...res);
  return res;
}

numsSum([1, 2, 3, 4, 1, 2, 0], 4);
