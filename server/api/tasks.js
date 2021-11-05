const router = require('express').Router();
const {db, Task, User} = require('../db');



// GET /api/tasks
router.get('/', async (req,res,next) => {
  try {
    const tasks = await Task.findAll({
      include: [
      {model: User}
    ]});
    res.json(tasks)

  } catch(e) {
    next(e);
  }
})

// POST /api/tasks --> creates a new task
router.post('/', async (req,res,next) => {
  try{
    const created = await Task.create(req.body);
    const newTask = await Task.findByPk(created.id, {
      include: [User]
    })
    res.json(newTask);

  } catch(e){
    next(e);
  }
})

// PUT /api/tasks/:id --> creates a new task
router.put('/:id', async (req,res,next) => {
  try{

    const numUpdated = await Task.update(req.body, {
      where: {id: req.params.id},
    });
    const updatedWithUser = await Task.findByPk(req.params.id, {include: [User]});
    res.json(updatedWithUser);

  } catch(e){
    next(e);
  }
})

// DELETE /api/tasks/:id --> deletes a task with specific id
router.delete('/:id', async(req,res,next) => {
  try{
    const toDelete = await Task.findByPk(req.params.id);
    await toDelete.destroy();
    res.json(toDelete);
  } catch(e) {
    next(e);
  }
})

module.exports = router;
