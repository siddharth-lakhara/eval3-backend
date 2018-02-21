
const readHandler = require('../handlers/readHandler');

const groupByAuthor = (allBooks) => {
  const sortedJSON = {};
  allBooks.books.map((element) => {
    const author = element.Author;

    if (typeof sortedJSON[author] === 'undefined') {
      sortedJSON[author] = [];
    }
    sortedJSON[author].push({ id: element.id, Name: element.Name, rating: element.rating });
  });
  console.log(sortedJSON);
  return sortedJSON;
};

module.exports = [{
  method: 'GET',
  path: '/read',
  handler: (req, reply) => {
    readHandler.then((allBooks) => {
      // console.log(allBooks);
      reply(allBooks);
      // const sortedJSON = groupByAuthor(allBooks);
      // reply(sortedJSON);
    });
  },
}];
