import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './abstract'
import {Suit, Texture, SuitTexture, StraightTexture, PairedTexture} from './../../_interfaces'

export class SuitTextureType extends TextureTypes {

  private _suits: Suit[];
  private _repeats: number;
  _defaultType: SuitTexture;

  constructor(params: { suits: Suit[] }) {
    super(params);
    this._suits = params.suits;
    this.setTypeCheckFunctions(); // check if this 
    this.setDefaultTextureType(); // can be moved to parent
    this.findType();
  }

  setTypeCheckFunctions() {
    this._typeCheckFunctions = [
      this.isMonotone, this.isTwoTone
    ]
  }

  setDefaultTextureType() {
    this._defaultTextureType = 'Rainbow'
  }

  private get suits() {
    return this._suits;
  }

  private setSuitsRepeats(): void {
    let firstSuit = this.suits[0];
    let filtered = this.suits.filter(s => s === firstSuit);
    this._repeats = filtered.length;
  }

  private isMonotone(): TypeCheckFunction {
    return {
      isOfType: this._repeats === 3,
      type: 'Monotone'
    }
  }
  private isTwoTone(): TypeCheckFunction  {
    return {
      isOfType: this._repeats === 2,
      type: 'TwoTone'
    }
  }
}