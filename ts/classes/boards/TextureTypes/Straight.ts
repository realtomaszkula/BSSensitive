import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './abstract'
import { Suit, Texture, StraightTexture } from './../../_interfaces'

export class StraightTextureType extends TextureTypes {

  private _values: number[];
  _defaultType: StraightTexture;
  private _gaps: {
    first: number,
    second: number  
  };
  
  constructor(params: { values: number[] }) {
    super(params);
    this._values = params.values;
    this.setGaps();
    this.findType();
  }

  setTypeCheckFunctions() {
    this._typeCheckFunctions = [
      this.isOneStraight, this.isTwoStraight, this.isThreeStraight
    ]
  }

  setDefaultTextureType() {
    this._defaultTextureType = 'ZeroStraight'
  }

  private set values(values) {
    this.values = values.sort( (a, b) =>  b - a)
  }

  private get values() {
    return this._values;
  }

  private setGaps(): void {
    let [first, second, third] = this.values;
    this._gaps.first = first - second - 1;
    this._gaps.second = second - third - 1;
  }

  isOneStraight (): TypeCheckFunction  {
    let values = this.values;
    // T96, T76, T86 ... and special cases QJT, A23, AKQ
    let isQJT = this.values[0] === 12 && this.values[1] === 11 && this.values[2] === 10;
    let isA23 = this.values[0] === 14 && this.values[1] === 2 && this.values[2] === 3;
    let isAKQ = this.values[0] === 14 && this.values[1] === 13 && this.values[2] === 12;
    let isRegularStr8 = (this._gaps.first === 0 && this._gaps.second === 2) || (this._gaps.first === 2 && this._gaps.second === 0) || 
            (this._gaps.first === 1 && this._gaps.second === 1); 
    return {
      isOfType: isRegularStr8 || isQJT || isA23 || isAKQ,
      type: 'OneStraight'
    }
  }

  isTwoStraight (): TypeCheckFunction {
    // T97, T87 
    let isRegularStr8 = (this._gaps.first === 1 && this._gaps.second === 0) || (this._gaps.first === 0 && this._gaps.second === 1)
    return {
      isOfType: isRegularStr8,
      type: 'TwoStraight'
    }
  }

  isThreeStraight (): TypeCheckFunction {
    // 456, 678, 789
    let isRegularStr8 = this._gaps.first === 0 && this._gaps.second === 0
    return {
      isOfType: isRegularStr8,
      type: 'ThreeStraight'
    }
  }  
}