const router = require('express').Router();

const apiRoutes = require('./api');
const home = require('./home.js');
const dashboard = require('./api/dashboard.js');

router.use('/', home);
router.use('/dashboard', dashboard);
router.use('/api', apiRoutes);  // we are passing along the INCOMING REQUEST

module.exports = router;
