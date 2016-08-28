import { HandRankSearch } from './../classes/hands/_handReading'
import { TwoPair } from './../classes/hands/TwoPair'
import { Card, HandRank, HandStrength, HandParams,  Suit, CardValue, 
  Search, TwoPairParams } from './../classes/hands/_interfaces'
import { card, getTwoPair } from './helpers/methods'
import { returnFiveCast } from './../typecasting/arrays'



describe('TwoPair', function() {
  
  describe('when creating an instance of TwoPair', function() {
  let hand: TwoPair;
    beforeEach(function() {
      let params: TwoPairParams = {
        cards : [ card('aceOfSpades'), card('aceOfClubs'), card('kingOfclubs'), card('kingOfDiamonds'), card('jackOfClubs')],
        handStrength: HandStrength.twoPair,
        lowerPair: CardValue.king,
        higherPair: CardValue.ace
      }
      hand = new TwoPair( params )
    });
      
    it('should set the lower pair correctly', function() {
      expect(hand.lowerPair).toEqual(CardValue.king)
    });
    it('should set the higher pair correctly', function() {
      expect(hand.lowerPair).toEqual(CardValue.king)
    });
  });
});
  