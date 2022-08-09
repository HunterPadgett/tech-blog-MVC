const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// post new blog
router.post('/', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(blogData);
    // res.redirect('profile');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  Blog.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((blog) => {
      res.json(blog);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
