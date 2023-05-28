// how to write promise
let myPromise = new Promise((resolve, reject) => {
  const a = 4,
    b = 5;
  setTimeout(() => {
    if (a == b) {
      resolve("A equals to B ");
    } else {
      reject("the values are not equal");
    }
  }, 2000);
});
// Pending state
console.log(myPromise);

// fulfilled state
myPromise.then((res) => {
  console.log(res);
});
// rejected state

myPromise.catch((err) => {
  console.log(err);
});
