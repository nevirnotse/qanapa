function number2hex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function rgb2hex(RGB) {
  RGB = RGB.split(',')
  R = Number(RGB[0])
  G = Number(RGB[1])
  B = Number(RGB[2])
  return number2hex(R) + number2hex(G) + number2hex(B);
}