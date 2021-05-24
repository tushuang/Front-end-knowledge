const obj = {
  a: "12",
  b: "23",
  first: {
    c: "34",
    d: "45",
    second: { e: "56", f: "67", three: { g: "78", h: "89", i: "90" } },
  },
};
// => [a,b,c,d,e,f,g,h,i]
// 请实现allKeys。
Object.prototype.allKeys = function () {
  const obj = this;
  let res = [];
  let helper = (obj) => {
    for (let item in obj) {
      if (obj.hasOwnProperty(item)) {
        if (obj[item] instanceof Object) {
          helper(obj[item]);
        } else {
          res.push(item);
        }
      }
    }
  };
  helper(obj);
  return res;
};
console.log(obj.allKeys());
