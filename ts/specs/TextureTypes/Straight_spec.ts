import { TextureTypes } from './../../classes/boards/TextureTypes/_TextureTypes'

import { StraightTextureType } from './../../classes/boards/TextureTypes/Straight'
import { card } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'
import { Texture, CardValue } from './../../classes/_interfaces'



describe('CardValueTextureType', function() {

  let values: number[];
  let textureObject: TextureTypes;

  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  describe('when given one straight board', function() {
    describe('with gap of two between two lowest cards (ex. T96)', function() {
      it('should set type to OneStraight', function() {
        values = [ CardValue.ten, CardValue.nine, CardValue.six]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('OneStraight')
      });  
    });
    describe('with gap of two between two highest cards (ex. T76)', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.ten, CardValue.seven, CardValue.six]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('OneStraight')
      });  
    });
    describe('with gap of one between each cards (ex. T86)', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.ten, CardValue.eight, CardValue.six]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('OneStraight')
      });  
    });
    describe('special case of QJT', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.queen, CardValue.jack, CardValue.ten]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('OneStraight')
      });  
    });
    describe('special case of A23', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.ace, CardValue.duce, CardValue.three]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('OneStraight')
      });  
    });
    describe('special case of AKQ', function() {
      it('should set type to OneStraight', function() {
        values = [CardValue.ace, CardValue.king, CardValue.queen]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('OneStraight')
      });  
    });

  describe('when given two straight board', function() {   
    describe('with gap of one between two lowest cards (ex. T87)', function() {
      it('should set type to TwoStraight', function() {
        values = [ CardValue.ten, CardValue.eight, CardValue.seven]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('TwoStraight')
      });  
    });
    describe('with gap of one between two highest cards (ex. T97)', function() {
      it('should set type to TwoStraight', function() {
        values = [CardValue.ten, CardValue.nine, CardValue.seven]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('TwoStraight')
      });  
    });
  });

  describe('when given three straight board', function() {   
    describe('with no gaps between cards (ex. 456)', function() {
      it('should set type to ThreeStraight', function() {
        values = [ CardValue.four, CardValue.five, CardValue.six]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('ThreeStraight')
      });  
    });
  });

  describe('when given zero straight board', function() {   
    describe('with no gaps between cards (ex. 459)', function() {
      it('should set type to ThreeStraight', function() {
        values = [ CardValue.four, CardValue.five, CardValue.nine]
        textureObject = new StraightTextureType({ values: values})
        expect(textureObject).toBeOfTextureType('ZeroStraight')
      });  
    });
  });

});
  