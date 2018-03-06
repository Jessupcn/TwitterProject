const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use(volleyball);

// app.get('/stylesheets/style.css', (req, res) => {
//     res.sendFile('/public/stylesheets/style.css');
// });

app.use(express.static(__dirname + '/public'));
app.use('/', routes);


nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', null, (err, output) => {
    if(err){console.log(err)}
});

// app.get('/', (req, res) => res.render('index', {title: 'LOTR Badasses', people: locals.people}));

app.listen(3000, () => console.log('Server is listening....... intently...'));
