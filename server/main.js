// will actually initialize and start the port + sync db
const server = require('./index');
const { db } = require('./db');
// const seed = require('../bin/seed');

const PORT = process.env.PORT || 8080;

// const init = async () => {
//   try {
//     console.log('here');
//     if (process.env.SEED === 'true') await seed();
//     else await db.sync();

//     server.listen(PORT, () => console.log(`

//     Listening on port ${PORT}

//     http://localhost:${PORT}/

// `))
//   } catch (err) {
//     console.log('error in main.js')
//     console.log(err);
//   }
// }

// init();

db.sync().then(() => {
  server.listen(PORT, () =>
    console.log(`

        Listening on port ${PORT}

        http://localhost:${PORT}/

    `)
  );
});
