const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');

app.use(volleyball);

app.get('/', (req, res) => res.send(`Hi there, Big Brother is watching you`));

app.listen(3000, () => console.log('Server is listening....... intently...'));
