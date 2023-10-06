const { server } = require('./server');

const url = "http://localhost:3000/";

server.listen(3000, () => {
    console.log(`Server is running on: ${url}`);
  });
