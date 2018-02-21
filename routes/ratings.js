const ratingsHandler = require('../handlers/ratingsHandler');

module.exports = [{
  method: 'GET',
  path: '/ratings/{id}',
  handler: (req, reply) => {
    ratingsHandler(req.params.id)
      .then((result) => {
        reply(result);
      });
  },
}];
