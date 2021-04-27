const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// in html displays wrong place if people hit localhost:3001/ 
router.use((req, res) => {
    res.send("<h1>Wrong place!!</h1>")
});

module.exports = router;