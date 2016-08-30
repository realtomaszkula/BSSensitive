import { Suit, CardValue, CardParams } from './_interfaces'

export class Card {
  private _suit: Suit;
  private _value: CardValue;

  constructor(params: CardParams) {
    this.checkParams(params);
    this.initializeSuit(params.suit);
    this.initializeValue(params.value);
  }

  get suit() {
    return this._suit
  }
  
  get value() {
    return this._value;
  }

  private checkParams(params: CardParams) {
    if (typeof params !== 'object') throw new Error('params must be an object: { suit, value }');
    if (!params.hasOwnProperty('suit')) throw new Error('params must have property of suit');
    if (!params.hasOwnProperty('value')) throw new Error('params must have property of value');
  }

  private initializeSuit(suit) {
    let downCasedSuit = suit.toLowerCase()
    let possibleSuits = ['s', 'd', 'c', 'h', 'spade', 'heart', 'diamond', 'club']
    let allowedSuit = possibleSuits.some( s => downCasedSuit);
    if (!allowedSuit) throw new Error(`Incorrect suit - ${suit}, allowed suits: spade, heart, diamond, club or one letter shortcut`)
    this._suit = suit;
  }
 private initializeValue(value) {
    if ( value > 14 || value < 2 ) throw new Error('Incorrect card value, allowed values: 2..14')
    this._value = value;
  }


}