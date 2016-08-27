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

  private setKickers(): void {
    this._kickers = this._values.filter( cardValue => cardValue != this._pair )
  }

  private sortKickers(): void {
    this._kickers = this._kickers.sort( (a, b) => b - a)
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
    this.setValues();
    this.setKickers();
    this.sortKickers();
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
