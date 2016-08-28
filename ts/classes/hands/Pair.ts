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
  private checkKickers(other:Pair) {
    let hisKickers =  other.kickers
    let myKickers = this.kickers

    for( let kicker in myKickers) {
      let r = this.compare({ my: myKickers[kicker], other: hisKickers[kicker]} )
      if ( r == 1 || r == -1 ) return r;
    }

   return 0;
  }

  prepareForResolving() {
    super.setKickers(this._pair);
  }

  resolveConflict(other:Pair): number {
    if (this.pair === other.pair) { 
      this.prepareForResolving()
      other.prepareForResolving()
      return this.checkKickers(other)   
    } 

    return (this.pair > other.pair) ? 1 : -1
  }  
}
