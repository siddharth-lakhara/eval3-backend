const booksHandler = require('../handlers/booksHandler');
const ratingsHandler = require('../handlers/ratingsHandler');

const getallHandler = new Promise((resolve) => {
  let booksJSON = {};
  const promiseArray = [];
  booksHandler().then((returnJSON) => {
    booksJSON = returnJSON;
    for (const book in booksJSON.books) {
      const id = booksJSON.books[book].id;
      promiseArray.push(ratingsHandler(id));
    }

    Promise.all(promiseArray).then((ratingsJSON) => {
      // console.log('ratings JSON: ', ratingsJSON);
      for (i in ratingsJSON) {
        (booksJSON.books[i]).rating = ratingsJSON[i].rating;
      }
      resolve(booksJSON);
    });
    // console.log(promiseArray);
    // console.log('booksJSON: ', booksJSON);
  });
});

module.exports = getallHandler;
