const router = require('express').Router();
// any require for models routes go here
const userRoutes = require('./userRoutes.js');
// const yRoutes = require('./yRoutes');
// const zRoutes = require('./zRoutes');

//  /api
router.use('/users', userRoutes);
// router.use('/y', yRoutes);
// router.use('/z', zRoutes);


module.exports = router;