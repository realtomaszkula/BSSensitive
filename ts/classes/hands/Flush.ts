import { HandClass, Card, CardClass,  Suit, CardValue, FlushParams } from './_interfaces'
import { Hand } from './_hand'

export class Flush extends Hand implements HandClass {

  private _suit: Suit

  constructor( params: FlushParams ) {
    super(params)
  }

  get kickers(): CardValue[] {
    return this._kickers;
  }

  private prepareForResolving(): void {
    this.setKickers()
  }

  resolveConflict(other: Flush) {
    this.prepareForResolving();;
    other.prepareForResolving();
    let hisKickers =  other.kickers
    let myKickers = this.kickers

    for( let kicker in myKickers) {
      let r = this.compare({ my: myKickers[kicker], other: hisKickers[kicker]} )
      if ( r == 1 || r == -1 ) return r;
    }
   return 0;
  }

}