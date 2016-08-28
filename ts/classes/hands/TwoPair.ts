import { Card, HandRank, HandParams,  Suit, CardValue, TwoPairParams } from './_interfaces'
import { Hand } from './_hand'
import { returnTwoCast } from './../../typecasting/arrays'

export class TwoPair extends Hand {

  private _higherPair: CardValue
  private _lowerPair: CardValue
  private _kicker: CardValue

  constructor( params: TwoPairParams ) {
    super(params)
    this._lowerPair  = params.lowerPair;
    this._higherPair = params.higherPair;
  }

  get higherPair(): CardValue {
    return this._higherPair
  }

  get lowerPair(): CardValue {
    return this._lowerPair
  }

  get kicker(): CardValue {
    return this._kickers[0]
  }

  private checkKickers(other: TwoPair) {
    return this.compare({my: this._kickers[0], other: other._kickers[0]})
  }

  private checkLowerPair(other: TwoPair) {
    if (this.lowerPair === other.lowerPair) { 
      return this.checkKickers(other)   
    } 

    (this.lowerPair > other.lowerPair) ? 1 : -1
  }

  prepareForResolving() {
    this.setValues();
    this.setKickers(this._higherPair, this.lowerPair)
  }

  resolveConflict(other: TwoPair): number {
    if (this.higherPair === other.higherPair) { 
      return this.checkLowerPair(other)   
    } 

    (this.higherPair > other.higherPair) ? 1 : -1
  }  
}