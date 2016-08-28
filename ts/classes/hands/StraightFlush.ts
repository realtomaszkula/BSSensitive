import { Card, CardClass, HandParams,  Suit, CardValue, StraightFlushParams } from './_interfaces'
import { Hand } from './_hand'

export class StraightFlush extends Hand implements HandClass {

  private _highestCard: Card
  private _suit: Suit

  constructor( params: StraightFlushParams ) {
    super(params)
  }

  get highestCard(): Card {
    return this._highestCard;
  }

  resolveConflice(other: StraightFlush): number {
    return this.compare( { my: this.highestCard, other: other.highestCard })
  }
}