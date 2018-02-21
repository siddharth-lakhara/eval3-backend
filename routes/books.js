const booksHandler = require('../handlers/booksHandler');

module.exports = [{
  method: 'GET',
  path: '/books',
  handler: (req, reply) => {
    booksHandler()
      .then((result) => {
        reply({
          data: result,
          statusCode: 200,
        });
      });
  },
}];
