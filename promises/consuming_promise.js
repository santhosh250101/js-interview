function getRandInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(() => {
      let num = getRandInt(10);
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 4000);
  });
}

const p = createPromiseWithTimeout();
p.then(
  function fullHandler(value) {
    console.log("fullfilled value is ", value);
  },
  function failHandler(value) {
    console.log("failed value is ", value);
  }
);
console.log("hehe");
