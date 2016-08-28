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

describe('when comparing to another TwoPair', function() {
  
  describe('with two bigger pairs', function() {
    let firstTwoPair: TwoPair;
    let secondTwoPair: TwoPair;
      beforeEach(function() {
        let params: TwoPairParams = {
          cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfDiamonds'), card('duceOfClubs')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.ace,
          lowerPair: CardValue.king
        }
        let anotherParams: TwoPairParams = {
          cards: [ card('queenOfSpades'), card('queenOfClubs'), card('jackOfSpades'), card('jackOfClubs'), card('duceOfSpades')],
          handStrength: HandStrength.twoPair,
          higherPair: CardValue.queen,
          lowerPair: CardValue.jack
        }
        firstTwoPair = new TwoPair(params)
        secondTwoPair = new TwoPair(anotherParams)
      });
        
      it('should return 1 if higher', function() {
        expect(firstTwoPair.resolveConflict(secondTwoPair)).toEqual(1)
      });
      it('should return -1 if lower', function() {
        expect(secondTwoPair.resolveConflict(firstTwoPair)).toEqual(-1)
      }); 
    });
    
  });
    
  
});
  