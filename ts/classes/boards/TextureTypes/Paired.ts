import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './_TextureTypes'
import { Suit, Texture, PairedTexture} from './../../_interfaces'

export class PairedTextureType extends TextureTypes {

  protected _defaultType: PairedTexture;
  private _uniqValuesNumber: number;
  private _values: number[];

  constructor(params: { values: number[] }) {
    super(params);
    this.values = params.values;
    this.setTypeCheckFunctions();
    this.setUniqValuesNumber();
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

  private setUniqValuesNumber() {
    let values = this.values;
    let repeats = 0;
    for(let i = 1; i < values.length; i++) {
      if (values[i] === values[i-1]) repeats++;
    }
    this._uniqValuesNumber = values.length - repeats;
  }

  private isPaired = (): TypeCheckFunction => {
    return {
      isOfType: this._uniqValuesNumber === 2,
      type: 'Paired'
    }
  }


  
}