import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, StraightParams } from './_interfaces'
import { Hand } from './_hand'

export class Straight extends Hand implements HandClass {

  private _highestCard: CardValue;
  private _isWheelStr8: boolean;

  constructor( params: StraightParams ) {
    super(params);
    this.setValues();
    this.sortValues();
    this.setIsWheelStr8()
    this.setHighestCard()
  }

  get highestCard(): CardValue {
    return this._highestCard;
  }

  private sortValues() {
    this._values.sort( (a, b) => a - b)
  }

  private setIsWheelStr8(  ): void {
    this._isWheelStr8 = (this._values[3] === 5 && this._values[4]  === 14 )
  }

  private setHighestCard(): void {
    this._highestCard = (this._isWheelStr8) ? 5 : this._values[4];
  }

  setKickers() {
  }
  
  resolveConflict(other: Straight): number {
    return super.compare(this._highestCard, other._highestCard)
  }
}