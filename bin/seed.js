const { db, User, Task } = require('../server/db');

// seeding async function
const seed = async () => {
  await db.sync({ force: true });

  // users
  const hyo = await User.create({ name: 'hyo', password: '1234' });
  const hayne = await User.create({ name: 'hayne', password: '1234' });
  const sungin = await User.create({ name: 'sungin', password: '1234' });

  // tasks
  const allTasks = [
    {
      description: 'walk the dog',
      userId: hyo.id,
    },
    {
      description: 'finish meeting',
      userId: hayne.id,
    },
    {
      description: 'get groceries from costco',
      userId: sungin.id,
    },
  ];

  await Promise.all(allTasks.map((task) => Task.create(task)));

  db.close();
  console.log(`

    Seeding Complete!

  `);
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
