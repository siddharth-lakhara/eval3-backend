// handler for path /ratings
// fetches and displays data from API 2

const https = require('https');

const ratingsHandler = id => new Promise((resolve) => {
  let jsonString = '';
  let jsonObject = {};
  // console.log('id: ', id);
  https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`, (response) => {
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

module.exports = ratingsHandler;
