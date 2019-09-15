const express = require('express');
const router = express.Router();
const functions = require('./functions');

router.get('/', (req, res) => {
    res.json(functions.randomQuote());
});

router.get('/all', (req, res) => {
    return res.json(functions.allQuotes());
});

router.get('/total', (req, res) => {
    res.json(functions.numberOfQuotes());
});

router.get('/author/:author', (req, res) => {
      res.json(functions.quotesByAuthor(req.params.author));
  });

module.exports = router;