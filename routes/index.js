const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get( '/users/:name', (req, res) => {
    const name = req.params.name;
    const tweets = tweetBank.find( { name: name });
    res.render( 'index', { tweets: tweets} );
});

router.get( '/tweets/:id', (req, res) => {
    const id = req.params.id;
    const tweets = tweetBank.find( { id: id });
    res.render( 'index', { tweets: tweets} );
});

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;
