const EventEmitter = require("events");
var url = "http://www.myousufdev.com/login";

// define a class
class Logger extends EventEmitter {
  log(msg) {
    // send http req
    console.log(msg);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;

//XX(X)
