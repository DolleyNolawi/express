var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* POST home page. */
router.post('/contactus', function(req, res) {  
  
    // var body = '';
    // filePath = __dirname + '/data.txt';
    // request.on('data', function(data) {
    //     body += data;
    // });

    // request.on('end', function (){
    //     fs.appendFile(filePath, body, function() {
    //         respond.end();
    //     });
    // });
});

module.exports = router;
