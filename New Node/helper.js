// single thing exported

// multiple thing exported

const user = (user) => user;
const id = (id) => id;
const phone = (phone) => phone;

const greet = (name) => console.log(`Hello Mr. ${name}`);

module.exports = {
  greet,
  user,
  id,
  phone,
};
