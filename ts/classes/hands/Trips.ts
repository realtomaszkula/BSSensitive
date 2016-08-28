import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, TripsParams } from './_interfaces'
import { Hand } from './_hand'

export class Trips extends Hand implements HandClass {

  private _trips: CardValue;

  constructor( params: TripsParams ) {
    super(params)
    this._trips = params.trips;
  }

  get trips (): CardValue {
    return this._trips;
  }

  resolveConflict(other: Trips): number {
    return this.compare({ my: this.trips, other: other.trips })
  }
}