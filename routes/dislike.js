const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/dislike/{id}',
  handler: (req, reply) => {
    const bookId = req.params.id;
    Models.likes.update(
      { like: 0 },
      { where: { bookid: bookId } },
    ).then(() => {
      reply('Book Disliked');
    });
  },
}];
