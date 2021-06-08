/**
 * 有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；

最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；

问：原来那堆牌的顺序，用函数实现。
 */
function sortPoke(arr) {
  let _arr = [];
  while (arr.length > 0) {
    // 选择抽取哪张牌
    _arr.push(arr.pop());
    if (arr.length > 0) _arr.push(arr.shift());
  }

  return _arr.reverse();
}
console.log(sortPoke([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
