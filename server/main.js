// will actually initialize and start the port + sync db
const server = require('./index');

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
