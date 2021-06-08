Array.prototype.map = function (cb, context) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb.call(context, this[i], i));
  }
  return res;
};
let arr = [1, 23, 3, 4];
console.log(
  arr.map((item) => {
    return item + 2;
  })
);
