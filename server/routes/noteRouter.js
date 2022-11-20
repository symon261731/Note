const express = require('express');
const { Note, Post } = require('../db/models');

const router = express.Router();

router.get('/setNote/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const data = await Note.findAll({
      where:
      { user_id: id },
    });
    res.json(data);
  } catch (e) {
    console.log(e);
  }
});

router.post('/addNote', async (req, res) => {
  try {
    let { input } = req.body;
    const { user } = req.body;
    if (input === '') { input = 'Без названия'; }
    const newNote = await Note.create({
      name: input,
      user_id: user.id,
    });
    res.json(newNote);
  } catch (e) {
    console.log(e);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { note_id: id } });
    await Note.destroy({ where: { id } });
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
