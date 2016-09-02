import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './_TextureTypes'
import { Suit, Texture, PairedTexture} from './../../_interfaces'

export class PairedTextureType extends TextureTypes {

  protected _defaultType: PairedTexture;
  private _values: number[];

  constructor(params: { values: number[] }) {
    super(params);
    this.values = params.values;
    this.setTypeCheckFunctions();
    this._type = this.findType();
  }

  private set values(values) {
    this._values = values.sort( (a, b) => b - a);
  }

  private get values() {
    return this._values;
  }

  protected setTypeCheckFunctions() {
    this._typeCheckFunctions = [
      this.isPaired
    ]
  }
  
  protected setDefaultTextureType() {
    this._defaultTextureType = 'NotPaired';
  }

  private isPaired = (): TypeCheckFunction => {
    let filtered = this.values.filter(v => v === this.values[0])
    let isPaired = filtered.length === 2;
    return {
      isOfType: isPaired,
      type: 'Paired'
    }
  }


  
}