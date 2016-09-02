import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './abstract'
import {Suit, Texture, SuitTexture, StraightTexture, PairedTexture} from './../../_interfaces'

export class PairedTextureType extends TextureTypes {

  private _values: number[];
  _defaultType: PairedTexture;

  constructor(params: { values: number[] }) {
    super(params);
    this.values = params.values;
    this.setTypeCheckFunctions();
    this.setDefaultTextureType();
    this.findType();
  }

  private set values(values) {
    this._values = values.sort( (a, b) => b - a);
  }

  private get values() {
    return this.values;
  }

  setTypeCheckFunctions() {
    this._typeCheckFunctions = [
      this.isPaired
    ]
  }
  
  setDefaultTextureType() {
    this._defaultTextureType = 'NotPaired';
  }

  private isPaired(): TypeCheckFunction {
    let filtered = this.values.filter(v => v === this.values[0])
    let isPaired = filtered.length === 1;
    return {
    isOfType: isPaired,
    type: 'Paired'
    }
  }


  
}