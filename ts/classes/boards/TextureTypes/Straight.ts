import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './_TextureTypes'
import { Suit, Texture, StraightTexture } from './../../_interfaces'

interface gaps {
  first: number,
  second: number
}

export class StraightTextureType extends TextureTypes {
  protected _defaultType: StraightTexture;
  private _values: number[];
  private _gaps: gaps;
  
  constructor(params: { values: number[] }) {
    super(params);
    this.values = params.values;
    this.setGaps();
    this.setTypeCheckFunctions();
    this._type = this.findType();
  }

  protected setTypeCheckFunctions() {
    this._typeCheckFunctions = [
      this.isOneStraight, this.isTwoStraight, this.isThreeStraight
    ]
  }

  protected setDefaultTextureType() {
    this._defaultTextureType = 'ZeroStraight'
  }

  private set values(values) {
    this._values = values.sort( (a, b) =>  b - a)
  }

  private get values() {
    return this._values;
  }

  private get gaps() {
    return this._gaps;
  }

  private setGaps(): void {
    let values = this.values;
    let [first, second, third] = values;
    this._gaps = {
      first: first - second - 1,
      second: second - third - 1
    }
  }

  private isOneStraight = (): TypeCheckFunction => {
    let values = this.values;
    let gaps = this.gaps;
    // T96, T76, T86 ... and special cases QJT, A23, AKQ
    let isQJT = values[0] === 12 && values[1] === 11 && values[2] === 10;
    let isA23 = values[0] === 14 && values[1] === 3 && values[2] === 2;
    let isAKQ = values[0] === 14 && values[1] === 13 && values[2] === 12;
    let isRegularStr8 = (gaps.first === 0 && gaps.second === 2) || (gaps.first === 2 && gaps.second === 0) || 
            (gaps.first === 1 && gaps.second === 1); 
    return {
      isOfType: isRegularStr8 || isQJT || isA23 || isAKQ,
      type: 'OneStraight'
    }
  }
  private isTwoStraight = (): TypeCheckFunction => {
    // T97, T87 
    let gaps = this.gaps;
    let isRegularStr8 = (gaps.first === 1 && gaps.second === 0) || (gaps.first === 0 && gaps.second === 1)
    return {
      isOfType: isRegularStr8,
      type: 'TwoStraight'
    }
  }
  private isThreeStraight = (): TypeCheckFunction => {
    // 456, 678, 789
    let gaps = this.gaps;
    let isRegularStr8 = gaps.first === 0 && gaps.second === 0
    return {
      isOfType: isRegularStr8,
      type: 'ThreeStraight'
    }
  }


}