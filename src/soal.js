const data = [];
const command = (a, b) => {
  for (let i = 1; i <= (a && b); i++) {
    if (a % i === 0 && b % i === 0) {
      console.log(i);
      data.push(i);
    }
  }
};

command(8, 12);
console.log(data.length);
