const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.render('main');
})

module.exports = router;
