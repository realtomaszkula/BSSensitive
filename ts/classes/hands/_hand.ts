import { Card, HandRank, HandParams, HandStrength,  Suit, CardValue } from './_interfaces'

export class Hand {
  protected _rank: HandRank;
  protected _handStrength: HandStrength;
  protected _values: CardValue[]
  protected _suits: Suit[]
  protected _cards: [Card, Card, Card, Card, Card] 

  constructor( params: HandParams ){
    this._cards = params.cards;
    this._handStrength = params.handStrength;
  }

  get rank () {
    return this._rank;  
  }

  protected setSuits() {
    this._suits = this._cards.map( card => card.suit )
  }

  protected setValues() {
    this._values = this._cards.map( card => card.value )
  }

  protected compare(params: { my: CardValue, other: CardValue }): number {
    if (params.my > params.other) {
      return 1
    } else if ( params.other > params.my) {
      return -1
    } else {
      return 0
    }
  }
}

