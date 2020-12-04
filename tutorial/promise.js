const promise1 = new Promise((resolve, reject) => {
  // http
  // escrita
  let number = 1;
  if (number == 0) {
    number++;
    resolve(number);
  } else {
    reject(new Error("number not equal to 0"));
  }
});



console.log("A");
promise1
  .then((number) => {
    console.log(number);
  })
  .catch((err) => {
    console.log("error: ", err.message);
  });
console.log("B");

