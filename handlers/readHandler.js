const Models = require('../models');

const readHandler = new Promise((resolve) => {
  let totalBooks;
  Models.books.findAll({
    attributes: ['author', 'books_id', 'name', 'rating'],
  }).then((allBooks) => {
    totalBooks = allBooks.length;
    let loopVar = 0;
    const returnBookObject = allBooks;
    returnBookObject.map((bookObject) => {
      const currentBookId = bookObject.books_id;
      Models.likes.findOne({ where: { bookid: currentBookId } })
        .then((likeStatusObject) => {
          bookObject.like = likeStatusObject.like;
          loopVar += 1;
        });
    });
    if (loopVar === totalBooks) {
      resolve(returnBookObject);
    }
  });
});

module.exports = readHandler;
