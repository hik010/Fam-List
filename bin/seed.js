const { db, User, Task } = require('../server/db');

// seeding async function
const seed = async () => {
  try {
    await db.sync({ force: true });

    const color_options = [
      'fireBrick',
      'tan',
      'LightSeaGreen',
      'violet',
      'salmon',
      'SeaGreen',
      'orange',
      'MediumSlateBlue',
      'PaleVioletRed',
      'CornflowerBlue',
    ];

    // users
    const hyo = await User.create({
      name: 'hyo',
      password: '1234',
      color: color_options[Math.floor(Math.random() * color_options.length)],
    });
    const hayne = await User.create({
      name: 'josh',
      password: '1234',
      color: color_options[Math.floor(Math.random() * color_options.length)],
    });
    const sungin = await User.create({
      name: 'mary',
      password: '1234',
      color: color_options[Math.floor(Math.random() * color_options.length)],
    });

    // tasks
    const allTasks = [
      {
        description: 'take out trash',
        userId: hyo.id,
        date: new Date('12/10/21'),
      },
      {
        description: 'finish meeting',
        userId: hayne.id,
        date: new Date('11/15/21'),
      },
      {
        description: 'get groceries from costco',
        userId: sungin.id,
        date: new Date('12/20/21'),
      },
    ];

    await Promise.all(allTasks.map((task) => Task.create(task)));

    // db.close(); //don't close the database when it's done seeding
    console.log(`

      Seeding Complete!

    `);

  }catch(e) {
    console.log('error in seed', e);
  }
};

async function runSeed() {
  seed().catch((err) => {
    db.close();
    console.log(`

      Error seeding:

      ${err.message}

      ${err.stack}

    `);
  });

}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
