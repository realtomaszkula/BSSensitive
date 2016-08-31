import { TextureReader } from './../../classes/boards/TextureReader'
import { Board } from './../../classes/boards/Board'
import { BoardTextures, BoardParams, TextureReaderParams, BoardCards, Flop, FlopTurn, FlopTurnRiver } from './../../classes/_interfaces'
import { card } from './../helpers/methods'


describe('TextureReader', function() {
  let boardTypeReader: TextureReader;
  let params: TextureReaderParams;
  describe('FLOP', function() {
    let boardCards: Flop;
    describe('when given monotone cards', function() {
      beforeEach(function() {
        boardCards = [card('aceOfSpades'), card('duceOfSpades'), card('sevenOfSpades')]
        params = { cards: boardCards}
      });
        
      it('should return board instance with board texture set to monotone ', function() {
        boardTypeReader = new TextureReader(params)
        expect(boardTypeReader.result.monotone).toBe(true)
      });
    });
      

  });
    
});
  
