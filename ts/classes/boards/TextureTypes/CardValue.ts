import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './_TextureTypes'
import { Suit, Texture, CardValueTexture} from './../../_interfaces'

export class CardValueTextureType extends TextureTypes {

  protected _type: CardValueTexture;
  protected _defaultType: CardValueTexture;
  protected _values: number[];
  protected _numOfBroadways: number;

  constructor(params: { values: number[]}) {
    super(params);
    this.values = params.values;
    this.setNumOfBroadways();
    this.setTypeCheckFunctions();
    this._type = this.findType();
  }

  get type() {
    return this._type;
  }

  private set values(values) {
    this._values = values.sort((a, b) => b - a);
  }

  private get values() {
    return this._values;
  }

  setTypeCheckFunctions() {
    this._typeCheckFunctions = [
      this.isSingleBroadway, this.isDoubleBroadway, this.isTrippleBroadway
    ]
  }

  setDefaultTextureType() {
    this._defaultTextureType = 'ZeroBroadway';
  }

  private setNumOfBroadways(): void {
    this._numOfBroadways = this.values.filter(v => v >= 10).length
  }

  isSingleBroadway = (): TypeCheckFunction => {
     return {
       isOfType: this._numOfBroadways === 1, 
       type: 'OneBroadway'
     }
  }
  isDoubleBroadway = (): TypeCheckFunction => {
     return {
       isOfType: this._numOfBroadways === 2, 
       type: 'TwoBroadway'
     }
  }
  isTrippleBroadway = (): TypeCheckFunction => {
     return {
       isOfType: this._numOfBroadways === 3, 
       type: 'ThreeBroadway'
     }
  }
  
}