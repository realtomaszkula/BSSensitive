import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, TwoPairParams } from './_interfaces'
import { Hand } from './_hand'
import { returnTwoCast } from './../../typecasting/arrays'

export class TwoPair extends Hand implements HandClass {

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
    this.prepareForResolving();
    other.prepareForResolving();
    return this.compare({my: this.kicker, other: other.kicker})
  }

  private checkLowerPair(other: TwoPair) {
    if (this.lowerPair === other.lowerPair) { 
      return this.checkKickers(other)   
    } 

    return (this.lowerPair > other.lowerPair) ? 1 : -1
  }

  prepareForResolving() {
    super.setKickers(this._higherPair, this.lowerPair)
  }

  resolveConflict(other: TwoPair): number {
    if (this.higherPair === other.higherPair) { 
      return this.checkLowerPair(other)   
    } 

    return (this.higherPair > other.higherPair) ? 1 : -1
  }  
}