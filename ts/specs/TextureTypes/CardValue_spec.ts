import { TextureTypes } from './../../classes/boards/TextureTypes/_TextureTypes'
import { CardValueTextureType } from './../../classes/boards/TextureTypes/CardValue'
import { card, permutationOfBoards } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'
import { Texture, CardValue } from './../../classes/_interfaces'



describe('CardValueTextureType', function() {

  let values: number[];
  let textureObject: TextureTypes;

  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  describe('when given one broadway cards and two rags', function() {
    values = [CardValue.ace, CardValue.duce, CardValue.three]
    for(let permutation of permutationOfBoards(values)) {
      it('should set type to OneBroadway', function() {
        textureObject = new CardValueTextureType({ values: permutation})
        expect(textureObject).toBeOfTextureType('OneBroadway')
      });
    }
  });

  describe('when given two broadway cards and one rag', function() {
    values = [CardValue.ace, CardValue.king, CardValue.three]
    for(let permutation of permutationOfBoards(values)) {
      it('should set type to TwoBroadway', function() {
        textureObject = new CardValueTextureType({ values: permutation})
        expect(textureObject).toBeOfTextureType('TwoBroadway')
      });
    }

  describe('when given three broadway cards and zero rags', function() {
    values = [CardValue.ace, CardValue.king, CardValue.queen]
    for(let permutation of permutationOfBoards(values)) {
      it('should set type to ThreeBroadway', function() {
        textureObject = new CardValueTextureType({ values: permutation})
        expect(textureObject).toBeOfTextureType('ThreeBroadway')
      });
    }

  describe('when given zero broadway cards and three rags', function() {
    values = [CardValue.four, CardValue.three, CardValue.duce]
    for(let permutation of permutationOfBoards(values)) {
      it('should set type to ZeroBroadway', function() {
        textureObject = new CardValueTextureType({ values: permutation})
        expect(textureObject).toBeOfTextureType('ZeroBroadway')
      }); 
    }
  
});
  