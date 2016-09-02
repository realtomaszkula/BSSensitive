import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './abstract'
import { Suit, Texture, CardValueTexture} from './../../_interfaces'

export class CardValueTextureType extends TextureTypes {

  _defaultType: CardValueTexture;
  _values: number[];
  _numOfBroadways: number;

  constructor(params: { values: number[]}) {
    super(params);
    this.values = params.values;
    this.setNumOfBroadways();
    this.findType();
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
  isSingleBroadway(): TypeCheckFunction {
     
     return {
       isOfType: this._numOfBroadways === 1, 
       type: 'OneBroadway'
     }
  }
  isDoubleBroadway(): TypeCheckFunction {
     return {
       isOfType: this._numOfBroadways === 2, 
       type: 'TwoBroadway'
     }
  }
  isTrippleBroadway(): TypeCheckFunction {
     return {
       isOfType: this._numOfBroadways === 3, 
       type: 'ThreeBroadway'
     }
  }


  
}