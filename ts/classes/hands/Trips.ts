import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, TripsParams } from './../_interfaces'
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

  setKickers() {
    super.setKickers(this._trips)
  }

  resolveConflict(other: Trips): number {
    if (this.trips === other.trips) { 
      this.setKickers();
      other.setKickers();
      return this.checkKickers(other);   
    } 

    return (this.trips > other.trips) ? 1 : -1;

  }
}