const helper = require('./helper');

console.log('id:', helper.id(1));
console.log('user:', helper.user('Yousuf'));
console.log('Phone:', helper.phone(123456789));

helper.greet('Yousuf');
