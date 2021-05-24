/**
 *  add(1)(2).valueOf()
 *  无限调用 返回的肯定是一个函数
 *  值存在闭包里
 */

const add = (...a) => {
  let res = a.reduce((x, y) => x + y);
  let fn = (...b) => {
    let resB = b.reduce((x, y) => x + y);
    res += resB;
    return fn;
  };
  fn.valueOf = () => {
    return res;
  };
  // 改成下面的代码 就不用调用valueOf
  // fn.toString = ()=>{
  //   return res;
  // }
  return fn;
};

const sum = (...a) => {
  let fn = (...b) => {
    return sum(...[...a, ...b]);
  };
  let res = a.reduce((x, y) => x + y);
  fn.valueOf = () => {
    return res;
  };
  return fn;
};

const curry = (fn, ...args1) => {
  return function (...args2) {
    let args = [...args1, ...args2];
    if (args2.length === 0) {
      return fn(...args);
    } else {
      return curry(fn, ...args);
    }
  };
};
let sum = (...arg) => {
  console.log(arg);
  return arg.reduce((x, y) => x + y);
};

curry(sum);
