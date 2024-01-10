const number = [2, 3, 4, 5];
const sum = number.reduce((acc, currentVal) => acc + currentVal, 0);

console.log(sum / number.length);
