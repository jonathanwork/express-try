var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('foo', {title: 'The Demo Express'});
});

module.exports = router;

