// problem 1
// add everytime u install new packages
var express = require('express');
var app = express();
var body_parser = require('body-parser')
// end packages

//type app.use to turn on packages
app.set ('view engine', 'hbs');
app.use(body)parser.urlencoded({edtended: false}));
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
  var name = request.query.name || 'Manoush!';
  var html_content='<p>You were born in 1985.</p>';
  var context = {
    title: 'Manoush!',
    content: html_content,
    name: name,
    image:'/static/catdog.jpg',
    friends:[{name:'Manoush', age: 32}]
  };
  response.render('hello.hbs',  context);
});
// query params
app.get('/year', function (request, response) {
  var year = 2017 - age;
  var age = 32
  var html_content='<p>You were born in 1985.</p>';
  var context = {
    title: 'Manoush!',
    content: html_content,
    age: 32
  };
  response.render('year.hbs',  context);
});

// templates 2
var animals = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];

// app.get('/fav_animals', function (request, response) {
//   var context = {
//     title: ' world',
//   }
// };
// response.render('favorit_animals.hbs',  context);
// });

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
//favorit_animals
// app.get('/form', function(request, response){
//   response.render('form.hbs', {title:})
// });

// forms
app.post('/submit', function (request, response){
  console.log(request.body);
  response.send('ok');
})

//redirect
app.post('/submit', function (request, response){
  console.log(request.body);
  response.redirect('/thank-you');
})

app.get('/thank-you', function (request, response){

})

app.listen(8002, function(){
  console.log('listening on port 8002')
})




//
