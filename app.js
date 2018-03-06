const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use(volleyball);

var locals = {
    title: 'An Example',
    people: [
        { name: 'Frodo' },
        { name: 'Gandalf' },
        { name: 'Legolas' }
    ],
}

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, (err, output) => {
    if(err){console.log(err)}
    console.log(output);
});

// res.render('index', {title: 'LOTR Badasses', people: locals.people})

app.get('/', (req, res) => res.render('index', {title: 'LOTR Badasses', people: locals.people}));

app.listen(3000, () => console.log('Server is listening....... intently...'));
