function cubicInOut(t, s, e, d) {
    t /= d / 2;
    if (t < 1) return e / 2 * t * t * t + s;
    t -= 2;
    return e / 2 * (t * t * t + 2) + s;
}

function linearInOut(t, s, e, d) {
    return e * t / d + s;
}