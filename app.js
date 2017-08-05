var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5002;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.post('/operation', function(req, res){
  console.log(req.body);
});

app.listen(port, function(){
	console.log('listening on port', port);
});
