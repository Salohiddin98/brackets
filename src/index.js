module.exports = function check(str, bracketsConfig) {
  let stack = [];
  str = Array.from(str);
  if (str.length % 2 != 0) {
    return false;
  } else {
    str.forEach((bracket) => {
      bracketsConfig.forEach((el) => {
        if (bracket === el[0] && stack[stack.length - 1] != el[1]) {
          stack.push(bracket);
        } else if (bracket === el[1]) {
          if (stack.length === 0) {
            return false;
          } else {
            if (stack[stack.length - 1] === el[0]) {
              stack.pop();
            } else {
              return false;
            }
          }
        }
      });
    });
  }
  if (stack.length != 0) {
    return false;
  }
  return true;
};
