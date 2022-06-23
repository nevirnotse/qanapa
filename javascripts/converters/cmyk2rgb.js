Math.decimal = (number, places) => {
    const scale = Math.pow(10, places);
    number *= scale
    number = Math.round(number);
    number /= scale
    return number
}

function cmyk2rgb(CMYK) {
    CMYK = CMYK.split(',')
    C = CMYK[0] / 100
    M = CMYK[1] / 100
    Y = CMYK[2] / 100
    K = CMYK[3] / 100
    const RGBChannel = CMYChannel => Math.round((1 - CMYChannel) * (1 - K) * 255);
    const R = RGBChannel(C);
    const G = RGBChannel(M);
    const B = RGBChannel(Y);
    return [
        R < 0 ? 0 : R,
        G < 0 ? 0 : G,
        B < 0 ? 0 : B,
    ];
}