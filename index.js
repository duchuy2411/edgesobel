var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// Define the port to run on
app.set('port', 8080);
app.use('/public', express.static(path.join(__dirname, 'public')))

var urlencodeParser = bodyParser.urlencoded({extended: false}); 

app.set('view engine', 'html');
app.set('views', '/views');

app.use('/', require('./controller/router'));

// Listen for requests  
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

