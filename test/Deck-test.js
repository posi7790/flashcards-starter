const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

var card1, card2, card3, deck;

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  deck = new Deck([card1, card2, card3]);

})

describe('Deck', () => {

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be a instance of the class Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should be able to add cards to deck', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count cards in a deck', () => {
    expect(deck.countCards()).to.equal(3);
  });
});