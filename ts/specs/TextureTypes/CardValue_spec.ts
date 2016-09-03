import { TextureTypes } from './../../classes/boards/TextureTypes/_TextureTypes'
import { CardValueTextureType } from './../../classes/boards/TextureTypes/CardValue'
import { card } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'
import { Texture, CardValue } from './../../classes/_interfaces'



describe('CardValueTextureType', function() {

  let values: number[];
  let textureObject: TextureTypes;

  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  describe('when given one broadway cards and two rags', function() {
    beforeEach(function() {
      values = [CardValue.ace, CardValue.duce, CardValue.three]
      textureObject = new CardValueTextureType({ values: values})
    });
    it('should set type to OneBroadway', function() {
      expect(textureObject).toBeOfTextureType('OneBroadway')
    });
    it('should NOT set type to TwoBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('TwoBroadway')
    });
    it('should NOT set type to ThreeBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('ThreeBroadway')
    });
    it('should NOT set type to ZeroBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('ZeroBroadway')
    }); 
  });

  describe('when given two broadway cards and one rag', function() {
    beforeEach(function() {
      values = [CardValue.ace, CardValue.king, CardValue.three]
      textureObject = new CardValueTextureType({ values: values})
    });
    it('should NOT set type to OneBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('OneBroadway')
    });
    it('should set type to TwoBroadway', function() {
      expect(textureObject).toBeOfTextureType('TwoBroadway')
    });
    it('should NOT set type to ThreeBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('ThreeBroadway')
    });
    it('should NOT set type to ZeroBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('ZeroBroadway')
    }); 
  });

  describe('when given three broadway cards and zero rags', function() {
    beforeEach(function() {
      values = [CardValue.ace, CardValue.king, CardValue.queen]
      textureObject = new CardValueTextureType({ values: values})
    });
    it('should NOT set type to OneBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('OneBroadway')
    });
    it('should NOT set type to TwoBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('TwoBroadway')
    });
    it('should set type to ThreeBroadway', function() {
      expect(textureObject).toBeOfTextureType('ThreeBroadway')
    });
    it('should NOT set type to ZeroBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('ZeroBroadway')
    }); 
  });

  describe('when given zero broadway cards and three rags', function() {
    beforeEach(function() {
      values = [CardValue.four, CardValue.three, CardValue.duce]
      textureObject = new CardValueTextureType({ values: values})
    });
    it('should NOT set type to OneBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('OneBroadway')
    });
    it('should NOT set type to TwoBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('TwoBroadway')
    });
    it('should NOT type to ThreeBroadway', function() {
      expect(textureObject).not.toBeOfTextureType('ThreeBroadway')
    });
    it('should set type to ZeroBroadway', function() {
      expect(textureObject).toBeOfTextureType('ZeroBroadway')
    }); 
  });
  
});
  