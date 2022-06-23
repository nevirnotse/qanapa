Math.decimal = (number, places) => {
    const scale = Math.pow(10, places);
    number *= scale
    number = Math.round(number);
    number /= scale
    return number
}

function getHue(R, G, B, max, chroma) {
    let hue;
    if (chroma === 0) {
        hue = 0;
    } else {
        switch (max) {
            case R: {
                const segment = (G - B) / chroma;
                let shift = 0 / 60;
                if (segment < 0) {
                    shift = 360 / 60;
                }
                hue = segment + shift;
                break;
            }
            case G: {
                const segment = (B - R) / chroma;
                const shift = 120 / 60;
                hue = segment + shift;
                break;
            }
            case B: {
                const segment = (R - G) / chroma;
                const shift = 240 / 60;
                hue = segment + shift;
                break;
            }
        }
    }
    return Math.round(hue * 60);
}

function rgb2hwb(RGB) {

    RGB = RGB.split(',')
    R = Number(RGB[0])
    G = Number(RGB[1])
    B = Number(RGB[2])

    R /= 255;
    G /= 255;
    B /= 255;

    const max = Math.max(R, G, B);
    const min = Math.min(R, G, B);
    const chroma = max - min;

    W = Math.decimal(min * 100, 1);
    BB = Math.decimal((1 - max) * 100, 1);

    if (W === 1 - BB) return [undefined, W, BB];

    H = getHue(R, G, B, max, chroma);

    return [H, W, BB]
}