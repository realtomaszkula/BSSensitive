import { Card, HandRank, HandParams,  Suit, CardValue } from './_interfaces'

class Trips extends Hand {

  private _trips: [Card, Card, Card]
  private _kickers: [Card, Card]

  constructor( params:HandParams ) {
    super(params)
  }

  get trips (): Card {
    return this._trips[0];
  }

  resolveConflict(other: Trips): number {
    return this.compare({ my: this.trips, other: other.trips })
  }
}