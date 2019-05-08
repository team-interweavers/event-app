
// set up express and mustache engines
var express = require('express');
var app = express();
var mustacheE = require('mustache-express');
var port= process.env.port=3000;
var path= require('path');

global.events=[{name:'event 1', imgs:['img/circle1', 'img/circle2', 'img/circle3']},
  {name:'event 2', imgs:['img/circle1', 'img/circle2', 'img/circle3']},
  {name:'event 3', imgs:['img/circle1', 'img/circle2', 'img/circle3']}];

app.engine('html', mustacheE());
app.set('view engine', 'html');
// 'views' contains the templates
app.set('views', path.join(__dirname, 'views'));

// serve static pages from static directory, 'static'
//can also serve for images etc.. any type of static file
app.use(express.static(__dirname + "/static"))

// request comes in on '/templates' page and this section outputs 'index.html' template as response
// redirects to page inside 'views' folder
app.get('/', function (req, res) {
  res.render('index', {circle1: "img/circle1_img.jpg", circle2: "img/circle2_img.jpg", circle3: "img/circle3_img.jpg"})
  // res.send('Hello World!');
});

//below
app.all('/post-events/post-preview', function (req, res) {
  res.render('post-preview')
});

app.get('/post-events/post-preview/event-desc', function (req, res) {
  res.render('event-desc', {eventDescUrl: "/post-events/post-preview/event-desc" })
});

//this is button event
// var x=window.document.getElementById("rsvp");
// x.addEventListener("click", changeText);
//
// function changeText(){
//   x.innerHTML="Cancel RSVP";
// }

app.get('/post-events', function (req, res) {
  res.render('make-post')
});

// app.get('/my-events', function (req, res) {
//   res.render('event-listings')
// });

app.get('/static/post-preview-style.css', function (req, res) {
  res.render('post-preview-style')
});

app.get('/', function (req, res) {
  res.render('index')
});


app.get('/event-listings', function (req, res) {
  res.render('event-listings')
});

app.get('/event-listings/filtered', function (req, res) {
  res.render('event-listings')
});

app.get('/event-listings/filter', function (req, res) {
  res.render('filter-page')
});


app.listen(port, function () {
  console.log('Example app listening on port', port);
});
