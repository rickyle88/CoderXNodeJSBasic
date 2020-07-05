var express = require('express');

var app = express();

var port = 3000;

// GET POST PUT DELETE
app.get('/', function(request, response){
    response.send('<h1>Hello world</h1>');
});

app.get('/users', function(request, response){
    response.send('User list: ');
});

app.listen(port, function(){
    console.log("Server listening on port " + port);
})