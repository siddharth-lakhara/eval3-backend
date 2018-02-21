
const getallHandler = require('../handlers/getallHandler');

const groupByAuthor = (combinedJSON) => {
  const sortedJSON = {};
  combinedJSON.books.map((element) => {
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
  path: '/getall',
  handler: (req, reply) => {
    getallHandler.then((combinedJSON) => {
      // console.log(combinedJSON);
      // reply(combinedJSON);
      const sortedJSON = groupByAuthor(combinedJSON);
      reply(sortedJSON);
    });
  },
}];
