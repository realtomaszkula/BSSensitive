import { Card, HandRank, HandParams, HandStrength,  Suit, CardValue } from './_interfaces'

export class Hand {
  private _rank: HandRank;
  private _handStrength: HandStrength;
  private _values: CardValue[]
  private _suits: Suit[]
  private _cards: [Card, Card, Card, Card, Card] 

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

  protected compare(params: { my: Card, other: Card }): number {
    if (params.my.value > params.other.value) {
      return 1
    } else if ( params.other.value > params.my.value) {
      return -1
    } else {
      return 0
    }
  }
}

