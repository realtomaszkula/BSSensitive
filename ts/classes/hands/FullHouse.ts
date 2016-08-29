import { Card, CardClass, HandParams,  Suit, CardValue, FullHouseParams, HandClass } from './_interfaces'
import { Hand } from './_hand'

export class FullHouse extends Hand implements HandClass {

  private _trips: CardValue;
  private _pair: CardValue;

  constructor( params: FullHouseParams ) {
    super(params)
    this._pair = params.pair;
    this._trips = params.trips;
  }

  get trips(): CardValue {
    return this._trips
  }

  get pair(): CardValue {
    return this._pair
  }

  resolveConflict(other: FullHouse) {
    if (this.trips === other.trips) { 
      return super.compare(this.pair, other.pair)   
    } 

    return (this.trips > other.trips) ? 1 : -1
  }
}