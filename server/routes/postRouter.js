const express = require('express');
const { Post } = require('../db/models');

const router = express.Router();

router.get('/getAll/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('back', id);
    const data = await Post.findAll({ where: { note_id: id } });
    res.json(data);
  } catch (e) {
    console.log(e);
  }
});

// router.get('/getPost/:id', async (req, res) => {
//   try {
//     const { postID } = req.params;
//     const data = await Post.findAll({ where: { post_id: postID } });
//     res.json(data);
//   } catch (e) {
//     console.log(e);
//   }
// });

router.post('/addPost', async (req, res) => {
  try {
    const { input, id } = req.body;
    console.log('back', input, id);
    const onePost = await Post.create({
      task: input,
      note_id: Number(id),
    });
    res.json(onePost);
  } catch (e) {
    console.log(e);
  }
});

router.delete('/deletePost/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
