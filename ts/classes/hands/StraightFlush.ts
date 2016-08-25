import { Card, HandRank, HandParams,  Suit, CardValue } from './_interfaces'

class StraightFlush extends Hand {

  private _highestCard: Card
  private _suit: Suit

  constructor( params:HandParams ) {
    super(params)
  }

  get highestCard(): Card {
    return this._highestCard;
  }

  resolveConflice(other: StraightFlush): number {
    return this.compare( { my: this.highestCard, other: other.highestCard })
  }
}