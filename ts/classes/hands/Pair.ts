import { Card, HandRank, HandParams,  Suit, CardValue } from './_interfaces'
import { Hand } from './_hand'

export class Pair extends Hand {

  private _pair: [Card, Card]
  private _kickers: [Card, Card, Card]

  constructor( params:HandParams ) {
    super(params)
  }

  get pair(): Card {
    return this._pair[0];
  }

  get kickers(): [Card, Card, Card] {
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
