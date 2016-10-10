var express = require('express');
var fs = require('fs');
var invent = require('../myjson.json');
var router = express.Router();


console.log(invent);
/* GET home page. */
router.get('/inventors', function(req, res, next) {
  res.render( 'index' , {invent: invent});
});



module.exports = router;
