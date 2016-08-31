import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, TwoPairParams } from './../_interfaces'
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

  setKickers() {
    super.setKickers(this._lowerPair, this._higherPair)
  }

  private checkHigherPair(other: TwoPair) {
    if (this.higherPair === other.higherPair) { 
      return this.checkLowerPair(other)   
    } 
    return (this.higherPair > other.higherPair) ? 1 : -1
  }

  private checkLowerPair(other: TwoPair) {
    if (this.lowerPair === other.lowerPair) { 
      this.setKickers();
      other.setKickers();
      return this.checkKickers(other)   
    } 
    return (this.lowerPair > other.lowerPair) ? 1 : -1
  }
  resolveConflict(other: TwoPair): number {
    return this.checkHigherPair(other);
  }  
}