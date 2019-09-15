const quotes = require('./quotes.json');

function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function allQuotes() {
    return quotes;
}

function numberOfQuotes() {
    return quotes.length;
}

function quotesByAuthor(name) {
    return quotes.filter(quote => quote.name === name);
}

module.exports = {
    randomQuote,
    allQuotes,
    numberOfQuotes,
    quotesByAuthor
};