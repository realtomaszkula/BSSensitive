import {Texture, SuitTexture, StraightTexture, PairedTexture, Suit, CardValue} from './../../_interfaces'

type TypeCheckFunction = { isOfType: boolean, type: Texture };
interface TypeCheckFunctions {
  (): TypeCheckFunction;
}

abstract class TextureTypes {
  protected _type: Texture;
  protected _defaultTextureType: Texture;
  protected _typeCheckFunctions: TypeCheckFunctions[]

  protected abstract setDefaultTextureType();
  protected abstract setTypeCheckFunctions();

  constructor(params: {}) {
    this.setDefaultTextureType();
  }

  get type() {
    return this._type;
  }

  protected getUniqNumber(arr: CardValue[] | Suit[]): number {
    let repeats = 0;
    for(let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i-1]) repeats++;
    }
    return arr.length - repeats;
  }

  protected findType() {
    for(let f of this._typeCheckFunctions) {
      let { isOfType,  type } = f();
      if(isOfType) return type;
    }
    return this._defaultTextureType;
  }

}

export { TypeCheckFunctions, TypeCheckFunction, TextureTypes }