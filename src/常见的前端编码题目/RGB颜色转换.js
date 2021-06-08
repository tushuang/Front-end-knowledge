function getRgbColor(str) {
  str = str[0] === "#" ? str.slice(1) : str;
  if (str.length == 3) {
    str = str[0] + str[0] + str[1] + str[1] + str[2] + str[2];
  }

  let arr = str.split("");
  let n1 = parseInt(arr.splice(0, 2).join(""), 16);
  let n2 = parseInt(arr.splice(0, 2).join(""), 16);
  let n3 = parseInt(arr.splice(0).join(""), 16);
  return `rgb(${n1},${n2},${n3})`;
}

console.log(getRgbColor("#fff"));
