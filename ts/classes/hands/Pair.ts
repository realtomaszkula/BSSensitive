import { Card, HandRank, HandParams,  Suit, CardValue, PairParams } from './_interfaces'
import { Hand } from './_hand'

export class Pair extends Hand {

  private _pair: CardValue
  private _kickers: [CardValue, CardValue, CardValue]

  constructor( params: PairParams ) {
    super(params)
    this._pair = params.pair
  }

  get pair(): CardValue {
    return this._pair;
  }

  get kickers(): [CardValue, CardValue, CardValue] {
    return this._kickers;
  }

  private checkKickers(other:Pair) {
    let hisKickers =  other.kickers
    let myKickers = this.kickers

    let result: number;
    for( let kicker in myKickers) {
      let r = this.compare({ my: myKickers[kicker], other: hisKickers[kicker]} )
      if ( r == 1 || r == -1 ) return r;
    }

   return result;
  }

  resolveConflict(other:Pair): number {
    if (this.pair.value === other.pair.value) { 
      return this.checkKickers(other)   
    } 

    (this.pair.value > other.pair.value) ? 1 : 0
  }  
}
