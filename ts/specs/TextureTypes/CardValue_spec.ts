import { CardValueTextureType } from './../../classes/boards/TextureTypes/CardValue'
import { card } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'
import { Texture, CardValue } from './../../classes/_interfaces'



describe('CardValueTextureType', function() {

  let values: number[];
  let textureType: Texture;

  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  describe('when given one broadway cards and two rags', function() {
    beforeEach(function() {
      values = [CardValue.ace, CardValue.duce, CardValue.three]
      textureType = new CardValueTextureType({ values: values}).type
    });
    it('should set type to OneBroadway', function() {
      expect(textureType).toBeOfTextureType('OneBroadway')
    });
    it('should NOT set type to TwoBroadway', function() {
      expect(textureType).not.toBeOfTextureType('TwoBroadway')
    });
    it('should NOT set type to ThreeBroadway', function() {
      expect(textureType).not.toBeOfTextureType('ThreeBroadway')
    });
    it('should NOT set type to ZeroBroadway', function() {
      expect(textureType).not.toBeOfTextureType('ZeroBroadway')
    }); 
  });

  describe('when given two broadway cards and one rag', function() {
    beforeEach(function() {
      values = [CardValue.ace, CardValue.king, CardValue.three]
      textureType = new CardValueTextureType({ values: values}).type
    });
    it('should NOT set type to OneBroadway', function() {
      expect(textureType).not.toBeOfTextureType('OneBroadway')
    });
    it('should set type to TwoBroadway', function() {
      expect(textureType).toBeOfTextureType('TwoBroadway')
    });
    it('should NOT set type to ThreeBroadway', function() {
      expect(textureType).not.toBeOfTextureType('ThreeBroadway')
    });
    it('should NOT set type to ZeroBroadway', function() {
      expect(textureType).not.toBeOfTextureType('ZeroBroadway')
    }); 
  });

  describe('when given three broadway cards and zero rags', function() {
    beforeEach(function() {
      values = [CardValue.ace, CardValue.king, CardValue.queen]
      textureType = new CardValueTextureType({ values: values}).type
    });
    it('should NOT set type to OneBroadway', function() {
      expect(textureType).not.toBeOfTextureType('OneBroadway')
    });
    it('should NOT set type to TwoBroadway', function() {
      expect(textureType).not.toBeOfTextureType('TwoBroadway')
    });
    it('should set type to ThreeBroadway', function() {
      expect(textureType).toBeOfTextureType('ThreeBroadway')
    });
    it('should NOT set type to ZeroBroadway', function() {
      expect(textureType).not.toBeOfTextureType('ZeroBroadway')
    }); 
  });

  describe('when given zero broadway cards and three rags', function() {
    beforeEach(function() {
      values = [CardValue.four, CardValue.three, CardValue.duce]
      textureType = new CardValueTextureType({ values: values}).type
    });
    it('should NOT set type to OneBroadway', function() {
      expect(textureType).not.toBeOfTextureType('OneBroadway')
    });
    it('should NOT set type to TwoBroadway', function() {
      expect(textureType).not.toBeOfTextureType('TwoBroadway')
    });
    it('should NOT type to ThreeBroadway', function() {
      expect(textureType).not.toBeOfTextureType('ThreeBroadway')
    });
    it('should set type to ZeroBroadway', function() {
      expect(textureType).toBeOfTextureType('ZeroBroadway')
    }); 
  });
  
});
  