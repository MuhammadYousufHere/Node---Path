const logger = require('./log');
const sayHello = (name) => {
  console.log('Hello ' + name);
};
sayHello('Yousuf');

logger.log('Welcome!');
// self invoking func

const selfInvoke = ((a) => {
  return console.log(a + a);
})(22);
// self invoking func

const selfInvokeWithDefaultParameters = ((a = 2) => {
  return console.log(a + a);
})();
