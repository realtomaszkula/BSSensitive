import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, HighCardParams } from './../_interfaces'
import { Hand } from './_hand'

export class HighCard extends Hand implements HandClass {
  constructor( params: HighCardParams) {
    super(params);
  }

  setKickers() {
    super.setKickers();
  }

  resolveConflict(other: HighCard) {
    this.setKickers();
    other.setKickers();
    return this.checkKickers(other)
  }

}