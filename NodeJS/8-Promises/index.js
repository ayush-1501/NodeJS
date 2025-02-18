// Purpose: The delayFn function is a simple utility that returns a Promise which resolves after a specified time (time in milliseconds).
// It uses setTimeout, a built-in JavaScript function, to delay the execution. After the specified time, the promise resolves.
function delayFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
//   console.log("Promise lecture starts") is printed first.
// The delayFn(200) is called, which returns a promise. This will resolve after 200 milliseconds (0.2 seconds).
// While the promise is still pending, console.log("end") is printed immediately (due to JavaScript's asynchronous nature).
// After 200 milliseconds, the promise resolves, and the then method is called, printing after 2 seconds promise resolved.
  console.log("Promise lecture starts");
  delayFn(200).then(() => console.log("after 2 seconds promise resolved"));
  console.log("end");
  
  function divideFn(num1, num2) {
    return new Promise((resolve, reject) => {
      if (num2 === 0) {
        reject("Can not perform division by 0");
      } else {
        resolve(num1 / num2);
      }
    });
  }
  
  divideFn(10, 0)
    .then((result) => console.log(result, "res"))
    .catch((error) => console.log(error, "err"));