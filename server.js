var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var port = 4000;
var app = express();

mongoose.connect('mongodb://kathiraashi:kathir143@ds233452.mlab.com:33452/curd-operation');
mongoose.connection.on('error', function(err) {
   console.log(err);
});
mongoose.connection.once('open', function() {
   console.log('DB Connectivity, Success!');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./Server/routes/curd-operation.routs.js')(app);


app.get('*', function(req, res){
   res.send('This is Server Side Page');
});


app.listen(port, function(){
 console.log('Listening on port ' + port);
});