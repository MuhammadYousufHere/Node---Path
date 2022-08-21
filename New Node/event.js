const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('test', () => console.log('Hello, You successfully did it!'));

myEmitter.emit();

//
const util = require('util');

const teams = (name) => (this.name = name);

// ES6 example using class and extends:

const EventEmitter = require('events');

class MyStream extends EventEmitter {
  write(data) {
    this.emit('data', data);
  }
}

const stream = new MyStream();

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('With ES6');
