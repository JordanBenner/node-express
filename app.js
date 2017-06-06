// problem 1

var express = require('express');
var app = express();

app.get('/cats', function (request, response){
  response.send('cats')
});

app.get('/dogs', function (request, response){
  response.send('dogs')
});

app.get('/cats_and_dogs', function (request, response){
  response.send('Cats and Dogs')
});
app.listen(8002, function(){
  console.log('listening on port 8002')
})


// problem 2

app.get('/greet/Kennedy:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Hello, Kennedy!: ' + slug);
});

app.get('/greet/Kennedy:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Hello, Kennedy!: ' + slug);
});

app.get('/greet/Kennedy:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Hello, Kennedy!: ' + slug);
});

app.listen(8002, function(){
  console.log('listening on port 8002')
})


//get query params

app.get('/hello', function (request, response) {
  var name = request.query.name || 'world';
  response.send('Hello ' + name);
});

app.listen(8002, function(){
  console.log('listening on port 8002')
})
