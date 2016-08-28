import { Card, CardClass, HandParams,  Suit, CardValue, StraightParams } from './_interfaces'
import { Hand } from './_hand'

export class Straight extends Hand implements HandClass {

  private _highestCard: Card

  constructor( params: StraightParams ) {
    super(params)
  }

  get highestCard() {
    return this._highestCard;
  }

  resolveConflice(other: Straight): number {
    return this.compare( {my: this.highestCard, other: other.highestCard} )
  }
}