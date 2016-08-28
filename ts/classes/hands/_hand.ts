import { Card, HandRank, HandParams, HandStrength,  Suit, CardValue } from './_interfaces'

export class Hand {
  protected _rank: HandRank;
  protected _handStrength: HandStrength;
  protected _suits: Suit[]
  protected _cards: Card[]
  protected _values: CardValue[]
  protected _kickers: CardValue[]


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

  private sortKickers(): void {
    this._kickers = this._kickers.sort( (a, b) => b - a)
  }

  protected setKickers(...excluded): void {
    // kickers is anything thats not relevant for given hand,
    // so pair will pass pair, two pair will pass both pairs etc.
    // this function collects the remaining values

    // if value match any of forbiden elems, filter it out
    this._kickers = this._values.filter( v => !excluded.some( n => v === n ) )
    this.sortKickers();
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

