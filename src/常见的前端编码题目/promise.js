function promise(j) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(j);
      resolve();
    }, 1000);
  });
}

let promiseR = Promise.resolve();
for (var i = 0; i < 5; i++) {
  (function (j) {
    promiseR = promiseR.then(() => {
      return promise(j);
    });
  })(i);
}
