const number = [1, 2, 5];
const index = "4";

const ganjilOrGenap = (arr, n) => {
  if (arr[n] % 2 === 0) {
    console.log("Genap");
  } else if (arr[n] % 2 === 1) {
    console.log("Ganjil");
  } else if (n > number.length) {
    console.log("Index diluar array");
  }
};

ganjilOrGenap(number, index);
