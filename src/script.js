const quotes = require('./quotesObject');
const quoteContainer = document.querySelector('.quote-container');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const generateBtn = document.querySelector('.generate-button');

generateBtn.addEventListener('click', generateQuote);


function generateQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length - 1);
  const randomQuote = quotes[randomNumber];
  console.log(randomQuote)
  quote.innerText = randomQuote.quote;
  author.innerText = randomQuote.name.split('(')[0].trim();
}