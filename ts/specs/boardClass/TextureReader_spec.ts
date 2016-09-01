import { TextureReaderFlop } from './../../classes/boards/TextureReaderFlop'
import { Board } from './../../classes/boards/Board'
import { BoardTextures, BoardParams, TextureReaderParams, BoardCards, Flop, FlopTurn, FlopTurnRiver } from './../../classes/_interfaces'
import { card } from './../helpers/methods'
import { customMatchers } from './../helpers/customMatchers'


describe('TextureReader', function() {
  
  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
  let boardTypeReader: TextureReaderFlop;
  let board: Board;
  let params: TextureReaderParams;
  describe('FLOP', function() {
    let flop: Flop;
    describe('when given monotone cards', function() {
      beforeEach(function() {
        flop = [card('aceOfSpades'), card('duceOfSpades'), card('sevenOfSpades')]
        params = { 
          boardObject: { flop: flop}
        }
      });
        
      it('should return board instance with board texture set to monotone ', function() {
        board = new TextureReaderFlop(params).result
        expect(board.textures).toBeTextureOf('Monotone')
      });
    });
      
  });
    
});
  
