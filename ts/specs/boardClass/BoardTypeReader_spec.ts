import { BoardTypeReader } from './../../classes/boards/BoardTypeReader'
import { Board } from './../../classes/boards/Board'
import { BoardTextures, BoardParams, BoardTypeReaderParams, BoardCards, Flop, FlopTurn, FlopTurnRiver } from './../../classes/_interfaces'
import { card } from './../helpers/methods'


describe('BoardTypeReader', function() {
  let boardTypeReader: BoardTypeReader;
  let params: BoardTypeReaderParams;
  describe('FLOP', function() {
    let boardCards: Flop;
    describe('when given monotone cards', function() {
      beforeEach(function() {
        boardCards = [card('aceOfSpades'), card('duceOfSpades'), card('sevenOfSpades')]
        params = { cards: boardCards}
      });
        
      it('should return board instance with board texture set to monotone ', function() {
        boardTypeReader = new BoardTypeReader(params)
        expect(boardTypeReader.result.monotone).toBe(true)
      });
    });
      

  });
    
});
  
