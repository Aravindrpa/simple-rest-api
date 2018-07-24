var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({Speech:"Welcome to bot",DisplayText:"Welcome to bot"});
  console.log(res.value);
});


module.exports = router;