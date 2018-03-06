const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.use(volleyball);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use('/', routes(io));

nunjucks.render('index.html', null, (err, output) => {
    if(err){console.log(err)}
});

// app.get('/', (req, res) => res.render('index', {title: 'LOTR Badasses', people: locals.people}));

const server = app.listen(3000);
if (server){console.log('Server is listening....... intently...')}
var io = socketio.listen(server);
