import { Suit, CardValue } from './_interfaces'

export class Card {
  private _suit: Suit;
  private _value: CardValue;

  constructor(suit, value) {
    this.initializeSuit(suit);
    this.initializeValue(value);
  }

  get suit() {
    return this._suit
  }
  
  get value() {
    return this._value;
  }

  initializeSuit(suit) {
    let downCasedSuit = suit.toLowerCase()
    let possibleSuits = ['s', 'd', 'c', 'h', 'spade', 'heart', 'diamond', 'club']
    let allowedSuit = possibleSuits.some( s => downCasedSuit);
    if (!allowedSuit) throw new Error('Incorrect suit value')
    this._suit = suit;
  }
 initializeValue(value) {
    if ( value > 14 || value < 2) throw new Error('Incorrect card value')
    this._value = value;
  }


}