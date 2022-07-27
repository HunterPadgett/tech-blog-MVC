const router = require('express').Router();
// any require for models routes go here
const xRoutes = require('./xRoutes.js');
const yRoutes = require('./yRoutes');
const zRoutes = require('./zRoutes');

router.use('/x', xRoutes);
router.use('/y', yRoutes);
router.use('/z', zRoutes);


module.exports = router;