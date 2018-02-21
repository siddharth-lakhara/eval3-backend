const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/like/{id}',
  handler: (req, reply) => {
    const bookId = req.params.id;
    Models.likes.update(
      { like: 1 },
      { where: { bookid: bookId } },
    ).then(() => {
      reply('Book Liked');
    });
  },
}];
