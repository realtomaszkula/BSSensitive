import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './_TextureTypes'
import { Suit, Texture, SuitTexture } from './../../_interfaces'

export class SuitTextureType extends TextureTypes {
  
  private _suits: Suit[];
  private _uniqSuitsNumber: number;
  protected _defaultType: SuitTexture;

  constructor(params: { suits: Suit[] }) {
    super(params);
    this.suits = params.suits;
    this.setUniqSuitNumber();
    this.setTypeCheckFunctions();
    this._type = this.findType();
  }

  protected setTypeCheckFunctions() {
    this._typeCheckFunctions = [
      this.isMonotone, this.isTwoTone
    ]
  }

  protected setDefaultTextureType() {
    this._defaultTextureType = 'Rainbow'
  }

  private set suits(suits) {
    this._suits = suits.sort();
  }
  private get suits() {
    return this._suits;
  }

  private setUniqSuitNumber(): void {
    let suits = this.suits;
    let repeats = 0;
    for(let i = 1; i < suits.length; i++) {
      if (suits[i] === suits[i-1]) repeats++;
    }
    this._uniqSuitsNumber = suits.length - repeats;
  }

  private isMonotone = (): TypeCheckFunction => {
    return {
      isOfType: this._uniqSuitsNumber === 1,
      type: 'Monotone'
    }
  }
  private isTwoTone = (): TypeCheckFunction => {
    return {
      isOfType: this._uniqSuitsNumber === 2,
      type: 'TwoTone'
    }
  }
}