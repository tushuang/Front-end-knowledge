/*
插入排序：把数据分为两个区间，有序和无序 每次从无序区间取出一个值 在有序区间从后往前找合适的位置插入
 */
function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let k = i;
    while (j >= 0) {
      if (arr[j] > arr[k]) {
        let temp = arr[k];
        arr[k] = arr[j];
        arr[j] = temp;
        k = j;
        j--;
      } else {
        j = -1;
      }
    }
  }
  console.log(arr);
}
sort([1, 2, 4, 5, 2, 1, 6, 8, 4, 0, 9]);
// 1 2 4 2 5
