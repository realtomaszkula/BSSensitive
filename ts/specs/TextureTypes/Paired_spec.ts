import { TextureTypes } from './../../classes/boards/TextureTypes/_TextureTypes'
import { PairedTextureType } from './../../classes/boards/TextureTypes/Paired'
import { card, permutationOfBoards } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'
import { Texture, CardValue } from './../../classes/_interfaces'



describe('CardValueTextureType', function() {

  let values: number[];
  let textureObject: TextureTypes;

  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  describe('when given Paired board', function() {
    values = [CardValue.ace, CardValue.ace, CardValue.king]
    for(let permutation of permutationOfBoards(values)) {
      it('should set type to Paired', function() {
        textureObject =  new PairedTextureType({ values: permutation })
        expect(textureObject).toBeOfTextureType('Paired')
      });  
    }
  });

  describe('when given Not Paired board', function() {   
    values = [CardValue.duce, CardValue.three, CardValue.four]
    for(let permutation of permutationOfBoards(values)) {
      it('should set type to NotPaired', function() {
        textureObject =  new PairedTextureType({ values: permutation })
        expect(textureObject).toBeOfTextureType('NotPaired')
      });  
    }
  });

});
  