// problem 1

var express = require('express');
var app = express();

app.set ('view engine', 'hbs');
app.use('/static', express.static('public'))

app.get('/cats', function (request, response){
  response.send('Meow')
});

app.get('/dogs', function (request, response){
  response.send('Woof')
});

app.get('/cats_and_dogs', function (request, response){
  response.send('Living together')
});



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

//templates
app.get('/greet', function (request, response) {
  var name = request.query.name || 'world';
  var html_content='<p>You were born in 1985.</p>';
  var context = {
    title: 'Manoush!',
    name: name,
    image:'/static/catdog.jpg',
    friends:[{name:'Manoush', age: 32}]
  };
  response.render('hello.hbs',  context);
});


//Lecture get query params

app.get('/hello', function (request, response) {
  var name = request.query.name || 'world';
  var context = {
    title: 'Hello',
    name: name,
    image:'/static/catdog.jpg',
    friends:[{name:'john', age: 21},{name: 'joan', age: 32}]
  };
  response.render('hello.hbs',  context);
});

app.listen(8002, function(){
  console.log('listening on port 8002')
})


//
