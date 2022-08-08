const router = require('express').Router();
// any require for models routes go here
const userRoutes = require('./userRoutes.js');
const blogRoutes = require('./blogRoutes.js');

// const zRoutes = require('./zRoutes');

//  /api
router.use('/users', userRoutes);
router.use('/blog', blogRoutes);

// router.use('/z', zRoutes);

module.exports = router;
