// will actually initialize and start the port + sync db
const server = require('./index');
const {db} = require('./db');

const PORT = 8080;

db.sync()
  .then(() => {
    server.listen(PORT, () => console.log(`

        Listening on port ${PORT}

        http://localhost:${PORT}/

    `))
  })
