//Express app that only serves static angularjs assets from the app folder

var express = require('express'),
    path = require('path');

var app = express();

var port = process.env.PORT || 9100;

//Possibly Add debugger / morgan, etc.

app.use(express.static(__dirname + '/app'));
app.all('*', function(req, res) {
    res.redirect('/#'+req.originalUrl);
});

app.listen(port);
