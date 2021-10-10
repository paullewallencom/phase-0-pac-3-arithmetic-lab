function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

function makeInt(n) {
    const nParsed = parseInt(n, 10);
    return nParsed;
}

function preserveDecimal(n) {
    const nParsed = parseFloat(n);
    return nParsed;
}