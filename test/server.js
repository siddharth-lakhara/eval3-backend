// const server = require('../src/server');
const http = require('http');

test('Server is working ', (done) => {
  http.get('http://localhost:8080/', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Home page response with promise', (done) => {
  let dataString = '';
  http.get('http://localhost:8080/', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      expect(dataString).toEqual('working with promise');
      done();
    });
  });
});

test('Able to connect to API 1', (done) => {
  http.get('http://localhost:8080/books', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Verify data from API 1', (done) => {
  let dataString = '';
  let dataObject = {};

  const verifyJSON = {
    books: [
      {
        Author: 'J K Rowling',
        id: 10,
        Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      },
      {
        Author: 'J K Rowling',
        id: 20,
        Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
      },
      {
        Author: 'Sidney Sheldon',
        id: 80,
        Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
      },
      {
        Author: 'Sidney Sheldon',
        id: 100,
        Name: 'Tell Me Your Dreams',
      },
      {
        Author: 'J K Rowling',
        id: 30,
        Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)',
      },
      {
        Author: 'J K Rowling',
        id: 40,
        Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)',
      },
      {
        Author: 'Sidney Sheldon',
        id: 90,
        Name: 'Master of the Game',
      },
      {
        Author: 'Sidney Sheldon',
        id: 110,
        Name: 'The Other Side of Midnight (Midnight #1)',
      },
      {
        Author: 'J K Rowling',
        id: 50,
        Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)',
      },
      {
        Author: 'J K Rowling',
        id: 60,
        Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)',
      },
      {
        Author: 'J K Rowling',
        id: 70,
        Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)',
      },
      {
        Author: 'Sidney Sheldon',
        id: 120,
        Name: 'Rage of Angels',
      },
    ],
  };

  http.get('http://localhost:8080/books', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      dataObject = JSON.parse(dataString);
      expect(dataObject.data).toEqual(verifyJSON);
      done();
    });
  });
});

test('Able to connect to API 2 - id 10', (done) => {
  http.get('http://localhost:8080/ratings/10', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Verify data from API 2 - id 10', (done) => {
  let dataString = '';
  let dataObject = {};
  const verifyJSON = {
    rating: 4.45,
  };

  http.get('http://localhost:8080/ratings/10', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      dataObject = JSON.parse(dataString);
      expect(dataObject).toEqual(verifyJSON);
      done();
    });
  });
});

test('Able to connect to API 2 - id 50', (done) => {
  http.get('http://localhost:8080/ratings/50', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Verify data from API 2 - id 50', (done) => {
  let dataString = '';
  let dataObject = {};
  const verifyJSON = {
    rating: 4.47,
  };

  http.get('http://localhost:8080/ratings/50', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      dataObject = JSON.parse(dataString);
      expect(dataObject).toEqual(verifyJSON);
      done();
    });
  });
});

test('Able to connect to api data combiner url', (done) => {
  http.get('http://localhost:8080/getall', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Got all data from getAll sorted by author', (done) => {
  let dataString = '';
  let dataObject = {};

  const verifyJSON = {
    'J K Rowling': [
      {
        id: 10,
        Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
        rating: 4.45,
      },
      {
        id: 20,
        Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
        rating: 4.38,
      },
      {
        id: 30,
        Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)',
        rating: 4.54,
      },
      {
        id: 40,
        Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)',
        rating: 4.53,
      },
      {
        id: 50,
        Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)',
        rating: 4.47,
      },
      {
        id: 60,
        Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)',
        rating: 4.54,
      },
      {
        id: 70,
        Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)',
        rating: 4.62,
      },
    ],
    'Sidney Sheldon': [
      {
        id: 80,
        Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
        rating: 4.02,
      },
      {
        id: 100,
        Name: 'Tell Me Your Dreams',
        rating: 3.93,
      },
      {
        id: 90,
        Name: 'Master of the Game',
        rating: 4.1,
      },
      {
        id: 110,
        Name: 'The Other Side of Midnight (Midnight #1)',
        rating: 3.9,
      },
      {
        id: 120,
        Name: 'Rage of Angels',
        rating: 3.92,
      },
    ],
  };

  http.get('http://localhost:8080/getall', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      dataObject = JSON.parse(dataString);
      expect(dataObject).toEqual(verifyJSON);
      done();
    });
  });
});
