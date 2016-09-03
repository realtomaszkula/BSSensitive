import { TextureReaderFlop } from './../../classes/boards/TextureReader/Flop'
import { Board } from './../../classes/boards/board'
import { BoardTextures, BoardParams, TextureReaderParams, BoardCards, Flop, FlopTurn, FlopTurnRiver } from './../../classes/_interfaces'
import { card, permutationOfBoards } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'


describe('TextureReader', function() {
  
  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  let boardTypeReader: TextureReaderFlop;
  let board: Board;
  let params: TextureReaderParams;
  describe('FLOP', function() {
    let cards: Flop;
    describe('when given [6s 2c 7d]', function() {
      cards = [card('sixOfSpades'), card('duceOfClubs'), card('sevenOfDiamonds')]

      for(let permutation of permutationOfBoards(cards)) {
          beforeEach(function() {
            params = {  boardObject: { flop: permutation as any }  }
          });
          it('should return board instance with Textures.suit set to Rainbow ', function() {
            board = new TextureReaderFlop(params).result
            expect(board).toBeOfTextureType('Rainbow', 'suit')
          });
          it('should return board instance with Textures.straight set to ZeroStraight ', function() {
            board = new TextureReaderFlop(params).result
            expect(board).toBeOfTextureType('ZeroStraight', 'straight')
          });
          it('should return board instance with Textures.paired set to NotPaired ', function() {
            board = new TextureReaderFlop(params).result
            expect(board).toBeOfTextureType('NotPaired', 'paired')
          });
          it('should return board instance with Textures.CardValue set to ZeroBroadway ', function() {
            board = new TextureReaderFlop(params).result
            expect(board).toBeOfTextureType('ZeroBroadway', 'cardValue')
          });
      }
    });
    describe('when given [As Kc Qd]', function() {
      cards = [card('aceOfSpades'), card('kingOfSpades'), card('queenOfSpades')]
      for(let permutation of permutationOfBoards(cards)) {
        beforeEach(function() {
          params = { boardObject: { flop: permutation as any } }
        });
        it('should return board instance with Textures.suit set to Monotone ', function() {
          board = new TextureReaderFlop(params).result
          expect(board).toBeOfTextureType('Monotone', 'suit')
        });
        it('should return board instance with Textures.straight set to OneStraight ', function() {
          board = new TextureReaderFlop(params).result
          expect(board).toBeOfTextureType('OneStraight', 'straight')
        });
        it('should return board instance with Textures.paired set to NotPaired ', function() {
          board = new TextureReaderFlop(params).result
          expect(board).toBeOfTextureType('NotPaired', 'paired')
        });
        it('should return board instance with Textures.CardValue set to ThreeBroadway ', function() {
          board = new TextureReaderFlop(params).result
          expect(board).toBeOfTextureType('ThreeBroadway', 'cardValue')
        });
      }
    });
    describe('when given [Jd Jc 2c]', function() {
      cards = [card('jackOfDiamonds'), card('jackOfClubs'), card('duceOfClubs')]
      for(let permutation of permutationOfBoards(cards)) {
        beforeEach(function() {
          params = { boardObject: { flop: permutation as any } }
        });
        it('should return board instance with Textures.suit set to TwoTone ', function() {
          board = new TextureReaderFlop(params).result
          expect(board).toBeOfTextureType('TwoTone', 'suit')
        });
        it('should return board instance with Textures.straight set to ZeroStraight ', function() {
          board = new TextureReaderFlop(params).result
          expect(board).toBeOfTextureType('ZeroStraight', 'straight')
        });
        it('should return board instance with Textures.paired set to Paired ', function() {
          board = new TextureReaderFlop(params).result
          expect(board).toBeOfTextureType('Paired', 'paired')
        });
        it('should return board instance with Textures.CardValue set to TwoBroadway ', function() {
          board = new TextureReaderFlop(params).result
          expect(board).toBeOfTextureType('TwoBroadway', 'cardValue')
        });
      }
    });
  });   
});
  
