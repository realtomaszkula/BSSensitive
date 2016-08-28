import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, PairParams } from './_interfaces'
import { Hand } from './_hand'

export class Pair extends Hand implements HandClass {

  private _pair: CardValue
  constructor( params: PairParams ) {
    super(params)
    this._pair = params.pair
  }

  get pair(): CardValue {
    return this._pair;
  }

  get kickers(): CardValue[] {
    return this._kickers;
  }

  setKickers() {
    super.setKickers(this._pair)
  }

  resolveConflict(other:Pair): number {
    if (this.pair === other.pair) { 
      this.setKickers()
      other.setKickers()
      return this.checkKickers(other)   
    } 

    return (this.pair > other.pair) ? 1 : -1
  }  
}
