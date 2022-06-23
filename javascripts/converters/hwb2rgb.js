Math.decimal = (number, places) => {
    const scale = Math.pow(10, places);
    number *= scale
    number = Math.round(number);
    number /= scale
    return number
}

function hwb2rgb(HWB) {
    HWB = HWB.split(',')
    H = HWB[0]
    W = HWB[1]
    B = HWB[2]
    H /= 60;
    W /= 100;
    B /= 100;

    const sumWB = W + B;
    if (sumWB > 1) {
        W /= sumWB;
        B /= sumWB;
    }

    const v = 1 - B;
    if (H === undefined) return [v, v, v];

    const i = Math.floor(H)
    const f = (i % 2 === 1) ? 1 - (H - i) : H - i // test if i is odd
    const n = W + f * (1 - sumWB);

    switch (i) {
        case 0:
            return [v, n, W].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0 : channel);
        case 1:
            return [n, v, W].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0 : channel);
        case 2:
            return [W, v, n].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0 : channel);
        case 3:
            return [W, n, v].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0 : channel);
        case 4:
            return [n, W, v].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0 : channel);
        case 5:
            return [v, W, n].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0 : channel);
    }
}