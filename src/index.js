const ArenguModal = require('./Modal');

const instance = ArenguModal.create();

if (global.ArenguModal) {
  console.warn('ArenguModal library has been loaded several times');
} else {
  global.ArenguModal = instance; // async
  instance.init();
}

module.exports = instance; // sync
