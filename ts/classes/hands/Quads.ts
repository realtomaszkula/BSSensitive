import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, QuadsParams } from './_interfaces'
import { Hand } from './_hand'

export class Quads extends Hand implements HandClass {

  private _quads: CardValue;
  private _kicker: CardValue;

  constructor( params: QuadsParams ) {
    super(params)
    this._quads = params.quads;
  }

  get quads(): CardValue {
    return this._quads;
  }

  setKickers() {
    super.setKickers(this._quads);
  }

  resolveConflict(other: Quads): number {
    if (this.quads === other.quads) {
      this.setKickers();
      other.setKickers();
      return this.checkKickers(other);
    }

    return (this.quads > other.quads) ? 1 : -1;
  }
}
