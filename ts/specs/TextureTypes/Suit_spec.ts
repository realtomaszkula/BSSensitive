import { TextureTypes } from './../../classes/boards/TextureTypes/_TextureTypes'
import { SuitTextureType } from './../../classes/boards/TextureTypes/Suit'
import { card } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'
import { Texture, Suit } from './../../classes/_interfaces'



describe('CardValueTextureType', function() {

  let suits: Suit[];
  let textureObject: TextureTypes;

  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  describe('when given Monotone board', function() {
    it('should set type to Monotone', function() {
      suits = ['spade', 'spade', 'spade']
      textureObject =  new SuitTextureType({ suits: suits })
      expect(textureObject).toBeOfTextureType('Monotone')
    });  
  });

  describe('when given TwoTone board', function() {   
    it('should set type to TwoTone', function() {
      suits = ['spade', 'club', 'club']
      textureObject =  new SuitTextureType({ suits: suits })
      expect(textureObject).toBeOfTextureType('TwoTone')
    });  
    it('should set type to TwoTone', function() {
      suits = ['club', 'spade', 'club']
      textureObject =  new SuitTextureType({ suits: suits })
      expect(textureObject).toBeOfTextureType('TwoTone')
    });  
    it('should set type to TwoTone', function() {
      suits = ['club', 'club', 'spade']
      textureObject =  new SuitTextureType({ suits: suits })
      expect(textureObject).toBeOfTextureType('TwoTone')
    });  
  });

  describe('when given Rainbow Board', function() {   
    it('should set type to Rainbow', function() {
      suits = ['spade', 'diamond', 'heart']
      textureObject =  new SuitTextureType({ suits: suits })
      expect(textureObject).toBeOfTextureType('Rainbow')
    });  
  });

});
  
