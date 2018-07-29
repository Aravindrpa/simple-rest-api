var express = require('express');
var router = express.Router();
var actions = require('../controllers/actions.js');


router.get('/', function(req, res, next) {
  res.json({fulfillmentText: "This is the default message from hook"}); //sending a default hook message json
  console.log(res.value);
});

router.get('/health', function(req, res, next) {
  res.send("Yes, this api is up and running"); //sending a plabe text response
  console.log(res.value);
});

router.post('/main',function(req,res,next){ 
  // this is where actions should be identified from req and calling methods based on that
  var dfQueryText = req.body.queryResult.queryText;
  var dfAction = req.body.queryResult.action;
  console.log(dfQueryText);
  console.log(dfAction);

  if(typeof(dfAction) != 'undefined' && dfAction != null) //check if action is empty
  {
    actions.call(dfAction,req,res,next); //calls the action defined in the request
  } //TODO : check if needs to be handled anyway
  else
  {
    res.json({fulfillmentText: "There was no action defined within fulfilment request"});
  }

  //res.json({fulfillmentText: "This is the default message from hook"});
});


module.exports = router;