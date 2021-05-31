/***

index: 删除的起始下标
num:删除个数
addlist: 新增的元素
returnItem ：返回已删除元素

slice 返回截取的数组
*/

// 实现slice
/**
 *
 * 计算出删除数据和添加完数据的后半部分数组
 * 再循环修改指定数组
 * 最后记得修改长度 当删除的长度比新增的长度多时会出错
 *
 *
 * 加上特殊值
 */
Array.prototype.splice = function (index, num, ...addList) {
  // if (start < 0) {
  //   if (Math.abs(start) > this.length) {
  //     start = 0;
  //   } else {
  //     start += this.length;
  //   }
  // }

  // if (typeof deleteCount === "undefined") {
  //   deleteCount = this.length - start;
  // }

  let len = this.length - num + addList.length;

  const deleteItem = this.slice(index, index + num);

  const rightArr = [...addList, ...this.slice(index + num)];
  let count = index;
  while (rightArr.length) {
    this[count] = rightArr.shift();
    count++;
  }
  this.length = len;
  return deleteItem;
};
