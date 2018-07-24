var express = require('express');
var router = express.Router();


router.get('/add', function(req, res, next) {
  res.json({Speech:"Add",DisplayText:"Add"});
  console.log(res.value);
});

router.get('/sub', function(req, res, next) {
  res.json({Speech:"Sub",DisplayText:"Sub"});
  console.log(res.value);
});


module.exports = router;