import { Card, HandRank, HandParams,  Suit, CardValue } from './_interfaces'
import { Hand } from './_hand'

export class Flush extends Hand {

  private _kickers: [Card, Card, Card, Card, Card]
  private _suit: Suit

  constructor( params:HandParams ) {
    super(params)
  }

  get kickers(): [Card, Card, Card, Card, Card] {
    return this._kickers;
  }

  resolveConflict(other: Flush) {
    let hisKickers =  other.kickers
    let myKickers = this.kickers

    let result: number;
    for( let kicker in myKickers) {
      let r = this.compare({ my: myKickers[kicker], other: hisKickers[kicker]} )
      if ( r == 1 || r == -1 ) return r;
    }
   return result;
  }

}