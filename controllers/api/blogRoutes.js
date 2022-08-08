const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newBlog = await Blog.create({
      ...req.body,
      userId: req.session.userId
    });

    res.status(200).json(newBlog);
    // res.status(200).json({message: "it worked"})
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
