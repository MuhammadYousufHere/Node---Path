const EventEmitter = require("events");
const emitter = new EventEmitter();
const Logger = require("./logger");
const logger = new Logger();

// Register a listener
emitter.on("messageLogged", (eventArg) => {
  console.log("I listened to an event!", eventArg);
});

logger.log("New Message");

// node ExtendEvent.js

// X(XX)
