import { Card, HandRank, HandParams,  Suit, CardValue, FullHouseParams } from './_interfaces'
import { Hand } from './_hand'

export class FullHouse extends Hand {

  private _trips: [Card, Card, Card]
  private _pair: [Card, Card]

  constructor( params: FullHouseParams ) {
    super(params)
  }

  get trips(): Card {
    return this._trips[0]
  }

  get pair(): Card {
    return this._pair[0]
  }

  private checkPair(other: FullHouse) :number {
    return this.compare({ my: this.pair, other: other.pair})
  }

  resolveConlict(other: FullHouse) {
    if (this.trips.value === other.trips.value) { 
      return this.checkPair(other)   
    } 

    (this.trips.value > other.trips.value) ? 1 : 0
  }
}