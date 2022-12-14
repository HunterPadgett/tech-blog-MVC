const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get route to show individual blog posts
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    const blog = blogData.get({ plain: true });

    res.render('blog', {
      blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// display only logged in user's blogs to their dashboard
router.get('/profile', async (req, res) => {
  try {
    if (req.session.logged_in) {
      const userBlogs = await Blog.findAll({
        where: {
          user_id: req.session.user_id
        },
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ]
      });

      const blogs = userBlogs.map((blog) => blog.get({ plain: true }));
      console.log(blogs);

      res.render('profile', {
        blogs,
        logged_in: req.session.logged_in
      });
    } else {
      res.redirect('login');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//
router.get('/newblog', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }]
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('newblog', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/editblog', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }]
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('editblog', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// once logged in, send to profile aka dashboard
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
