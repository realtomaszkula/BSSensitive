import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, StraightParams } from './_interfaces'
import { Hand } from './_hand'

export class Straight extends Hand implements HandClass {

  private _highestCard: CardValue

  constructor( params: StraightParams ) {
    super(params);
    this._highestCard = params.highestCard;
  }

  get highestCard(): CardValue {
    return this._highestCard;
  }

  resolveConflict(other: Straight): number {
    return this.compare( {my: this.highestCard, other: other.highestCard} )
  }
}