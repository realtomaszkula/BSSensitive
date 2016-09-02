import {Texture, SuitTexture, StraightTexture, PairedTexture} from './../../_interfaces'

type TypeCheckFunction = { isOfType: boolean, type: Texture };
interface TypeCheckFunctions {
  (): TypeCheckFunction;
}

abstract class TextureTypes {
  protected _type: Texture;
  protected _defaultTextureType: Texture;
  protected _typeCheckFunctions: TypeCheckFunctions[]

  abstract setDefaultTextureType();
  abstract setTypeCheckFunctions();

  constructor(params: {}) {
  }

  protected findType() {
    for(let f of this._typeCheckFunctions) {
      let { isOfType,  type } = f();
      if(isOfType) return type;
    }
    return this._defaultTextureType;
  }

  protected get type() {
    return this._type;
  }

}

export { TypeCheckFunctions, TypeCheckFunction, TextureTypes }