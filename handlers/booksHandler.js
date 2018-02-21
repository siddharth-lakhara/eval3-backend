// handler for path /books
// fetches and displays data from API 1

const https = require('https');

const booksHandler = () => new Promise((resolve) => {
  let jsonString = '';
  let jsonObject = {};
  https.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      jsonString += data;
    });
    response.on('end', () => {
      jsonObject = JSON.parse(jsonString);
      // console.log(jsonObject);
      resolve(jsonObject);
    });
  });
});

module.exports = booksHandler;
