const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("mailvalid", (string) => {
  const mailcheck = string.match(/^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/g);
  if (mailcheck !== null) {
    console.log("Email is valid");
    return true;
  } else {
    console.log("Email is not valid");
    return false;
  }
});
