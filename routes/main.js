const mainHandler = require('../handlers/mainHandler');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    mainHandler().then((retString) => {
      reply(retString);
    });
  },
}];
