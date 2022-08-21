const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener

emitter.on("messageLogged", (eventArg) => {
  console.log("I listened to an event!", eventArg);
});

// Raise an event

emitter.emit("messageLogged", { id: 1, url: "http://" });
