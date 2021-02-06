module.exports = function check(str, bracketsConfig) {
  for (let x = 0; x < str.length; x++) {
    for (let y = 0; y < bracketsConfig.length; y++) {
      if(str[x] == bracketsConfig[y][0] && str[x + 1] == bracketsConfig[y][1]) {
        let z = bracketsConfig[y][0] + bracketsConfig[y][1];
		str = str.replace(z, '');
		x -= 2;
      }
    }
  }
  return str == '';
}
