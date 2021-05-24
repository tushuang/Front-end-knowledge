/**
 * getData.bind(this,a,b,c)
 */
Function.prototype.mybind = function mybind(context) {
  const calledFn = this;
  context._fn_ = calledFn;
  let args = Array.prototype.slice.call(arguments, 1);
  return function () {
    const funcArgs = args.concat(Array.prototype.slice.call(arguments));
    context._fn_(...funcArgs);
    delete context._fn_;
  };
};

// text
var obj = { name: "Smiley" };
var greeting = function (str, lang) {
  this.value = "greetingValue";
  console.log(this);
  console.log("Welcome " + this.name + " to " + str + " in " + lang);
};
var objGreeting = greeting.mybind(obj, "the world");
var newObj = objGreeting("JS");
