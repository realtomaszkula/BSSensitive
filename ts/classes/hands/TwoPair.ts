import { Card, HandRank, HandParams,  Suit, CardValue } from './_interfaces'
import { Hand } from './_hand'

export class TwoPair extends Hand {

  private _higherPair: [Card, Card]
  private _lowerPair: [Card, Card]
  private _kicker: Card

  constructor( params:HandParams ) {
    super(params)
  }

  get higherPair(): Card {
    return this._higherPair[0]
  }

  get lowerPair(): Card {
    return this._lowerPair[0]
  }

  get kicker(): Card {
    return this._kicker
  }

  private checkKickers(other: TwoPair) {
    return this.compare({my: this.kicker, other: other.kicker})
  }

  private checkLowerPair(other: TwoPair) {
    if (this.lowerPair.value === other.lowerPair.value) { 
      return this.checkKickers(other)   
    } 

    (this.lowerPair.value > other.lowerPair.value) ? 1 : 0
  }

  resolveConflict(other: TwoPair): number {
    if (this.higherPair.value === other.higherPair.value) { 
      return this.checkLowerPair(other)   
    } 

    (this.higherPair.value > other.higherPair.value) ? 1 : 0
  }  
}