const Models = require('../models');
const getallHandler = require('../handlers/getallHandler');

module.exports = [{
  method: 'GET',
  path: '/updatedb',
  handler: (req, reply) => {
    getallHandler.then((combinedJSON) => {
      Models.books.destroy({
        where: {},
        truncate: true,
      })
        .then(() => {
          Models.likes.destroy({
            where: {},
            truncate: true,
          })
            .then(() => {
              combinedJSON.books.forEach((item) => {
                Models.books.create({
                  author: item.Author,
                  books_id: item.id,
                  name: item.Name,
                  rating: item.rating,
                }).then((createdItem) => {
                  Models.likes.create({
                    bookid: createdItem.books_id,
                    like: 0,
                  });
                })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            });
        });
      // reply('DB Updated');
      reply('DB Updated');
    })
      .catch((err) => {
        console.log(err);
      });
  },
}];
