export function getRange(start, end) {

    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}

export function arrSum(arr) {

    return arr.reduce((a,b)=>a+b,0)
}
