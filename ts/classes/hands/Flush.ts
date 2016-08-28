import { HandClass, Card, CardClass,  Suit, CardValue, FlushParams } from './_interfaces'
import { Hand } from './_hand'

export class Flush extends Hand implements HandClass {

  private _suit: Suit;

  constructor( params: FlushParams ) {
    super(params);
  }

  get kickers(): CardValue[] {
    return this._kickers;
  }

  setKickers() {
    super.setKickers();
  }

  resolveConflict(other: Flush) {
    this.setKickers();
    other.setKickers();
    return this.checkKickers(other);
  }

}