import { TypeCheckFunctions, TypeCheckFunction, TextureTypes } from './abstract'
import {Suit, Texture, SuitTexture, StraightTexture, PairedTexture} from './../../_interfaces'

class StraightTextureType extends TextureTypes {


  _defaultType: ;

  constructor(params: {}) {
    super(params);
    this.setDefaultTextureType();
    this.findType();
  }

  setTypeCheckFunctions() {
    this._typeCheckFunctions = [
    ]
  }

  setDefaultTextureType() {
    this._defaultTextureType = 
  }


  
}