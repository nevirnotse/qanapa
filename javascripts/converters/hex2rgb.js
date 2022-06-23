function hex2rgb(RGB) {
    RGB = RGB.split(/(?=(?:..)*$)/);
    const R = parseInt(RGB[0], 16);
    const G = parseInt(RGB[1], 16);
    const B = parseInt(RGB[2], 16);
    return [
        R < 0 ? 0 : R,
        G < 0 ? 0 : G,
        B < 0 ? 0 : B,
    ];
}