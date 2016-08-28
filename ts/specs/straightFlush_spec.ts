import { HandRankSearch } from './../classes/hands/_handReading'
import { StraightFlush } from './../classes/hands/StraightFlush'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, StraightFlushParams } from './../classes/hands/_interfaces'
import { card } from './helpers/methods'


describe('StraightFlush', function() {
  let hand: StraightFlush;
  describe('when creating an instance of StraightFlush', function() {
    let params: StraightFlushParams = {
      cards: [ card('aceOfSpades'), card('kingOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades')],
      handStrength: HandStrength.straightFlush,
    }
    let hand = new StraightFlush(params)

    it('should set highest card correctly', function() {
      expect( hand.highestCard ).toEqual( CardValue.ace )
    });

    it('should set isWheel to false when passed not wheel str8flush', function() {
      expect( hand.isWheel ).toBe( false )
    });

    
    it('should set isWheel to true when passeed wheel str8flush', function() {
      let params2: StraightFlushParams = {
        cards: [ card('fiveOfSpades'), card('fourOfSpades'), card('threeOfSpades'), card('duceOfSpades'), card('aceOfSpades')],
        handStrength: HandStrength.straightFlush,
      };    
      let hand2 = new StraightFlush(params2);

      expect(hand2.isWheel).toBe(true);
    });
      
      
  });
    
  
  describe('when comparing to another StraightFlush', function() {
    let firstHand: StraightFlush;
    let secondHand: StraightFlush;
    
    beforeEach(function() {
      let firstParams: StraightFlushParams = {
        cards: [ card('aceOfSpades'), card('kingOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades')],
        handStrength: HandStrength.straightFlush,
      }
      let secondParams: StraightFlushParams = {
        cards: [ card('kingOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
        handStrength: HandStrength.straightFlush,
      };
      firstHand = new StraightFlush(firstParams)
      secondHand = new StraightFlush(secondParams);    
    });

    it('should return 1 when higher', function() {
      expect( firstHand.compareTo(secondHand)).toEqual(1)
    });

    it('should return -1 when lower', function() {
      expect( secondHand.compareTo(firstHand)).toEqual(-1)
    });

    it('should return 0 if the same', function() {
      expect( secondHand.compareTo(secondHand)).toEqual(0)
    });
      
  });

  describe('when comparing wheel str8flush to another StraightFlush', function() {
    let firstHand: StraightFlush;
    let secondHand: StraightFlush;
    
    beforeEach(function() {
      let firstParams: StraightFlushParams = {
        cards: [ card('sixOfSpades'), card('fiveOfSpades'), card('fourOfSpades'), card('threeOfSpades'), card('duceOfSpades')],
        handStrength: HandStrength.straightFlush,
      };    
      let secondParams: StraightFlushParams = {
        cards: [ card('fiveOfSpades'), card('fourOfSpades'), card('threeOfSpades'), card('duceOfSpades'), card('aceOfSpades')],
        handStrength: HandStrength.straightFlush,
      };    
      firstHand = new StraightFlush(firstParams)
      secondHand = new StraightFlush(secondParams)

    });

    it('should return 1 when higher', function() {
            
      
      expect( firstHand.compareTo(secondHand)).toEqual(1)
    });

    it('should return -1 when lower', function() {
      expect( secondHand.compareTo(firstHand)).toEqual(-1)
    });

    it('should return 0 if the same', function() {
      expect( secondHand.compareTo(secondHand)).toEqual(0)
    });
      
  });
    
});