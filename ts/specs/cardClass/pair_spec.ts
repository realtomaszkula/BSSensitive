import { HandRankSearch } from './../../classes/hands/_handReading'
import { Pair } from './../../classes/hands/Pair'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams,
  SearchesOnceAndRemembers } from './../../classes/hands/_interfaces'
import { card, getPair } from './../helpers/methods'
import { returnFiveCast } from './../../typecasting/arrays'

describe('Pair', function() {

  describe('when creating an instance of Pair', function() {
  let hand: Pair;
    beforeEach(function() {
      let params: PairParams = {
        cards : [ card('aceOfSpades'), card('aceOfClubs'), card('kingOfclubs'), card('queenOfClubs'), card('jackOfClubs')],
        handStrength: HandStrength.pair,
        pair: CardValue.ace 
      }
      hand = new Pair( params )
    });
      
    it('should set the pair correctly', function() {
      expect(hand.pair).toEqual(CardValue.ace)
    });
  });

  
  describe('when comparing to another pair', function() {
  let firstPair: Pair;
  let secondPair: Pair;
    beforeEach(function() {
      let params: PairParams = {
        cards: [ card('kingOfDiamonds'), card('kingOfClubs'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfSpades') ],
        handStrength: HandStrength.pair,
        pair: CardValue.king
      }
      let anotherParams: PairParams = {
        cards: [ card('aceOfClubs'), card('aceOfSpades'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfSpades') ],
        handStrength: HandStrength.pair,
        pair: CardValue.ace
      }

      firstPair = new Pair(params)
      secondPair = new Pair(anotherParams)
    });
      
    it('should recognize bigger pair', function() {
      expect(firstPair.compareTo(secondPair)).toEqual(-1)
    });
    it('should recognize lower pair', function() {
      expect(secondPair.compareTo(firstPair)).toEqual(1)
    }); 
  });
  
  
  describe('when comparing to the same pair', function() {
  let firstPair: Pair;
  let secondPair: Pair;
  let defaultParams = { pair: CardValue.ace, handStrength: HandStrength.pair }
  
  describe('with different 1st kicker', function() {
    beforeEach(function() {
      let cards = {
        cards: returnFiveCast([ card('aceOfClubs'), card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs'), card('jackOfSpades')])
      };
      let otherCards = {
        cards: returnFiveCast([ card('aceOfDiamonds'), card('aceOfHearts'), card('queenOfDiamonds'), card('jackOfDiamonds'), card('tenOfSpades')]),
      };
      
      ({ firstPair, secondPair } = getPair(defaultParams, cards, otherCards));
    });

    it('should return 1 if higher', function() {
      expect(firstPair.compareTo(secondPair)).toEqual(1)
    })
    it('should return -1 if lower', function() {
      expect(secondPair.compareTo(firstPair)).toEqual(-1)
    })
      
    });

  describe('with different 2nd kicker', function() {
    beforeEach(function() {
      let cards = {
        cards: returnFiveCast([ card('aceOfClubs'), card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs'), card('jackOfSpades')])
      };
      let otherCards = {
        cards: returnFiveCast([ card('aceOfDiamonds'), card('aceOfHearts'), card('kingOfDiamonds'), card('jackOfDiamonds'), card('tenOfSpades')]),
      };
      
      ({ firstPair, secondPair } = getPair(defaultParams, cards, otherCards));
    });

    it('should return 1 if higher', function() {
      expect(firstPair.compareTo(secondPair)).toEqual(1)
    })
    it('should return -1 if lower', function() {
      expect(secondPair.compareTo(firstPair)).toEqual(-1)
    })
      
    });

  describe('with different 3rd kicker', function() {
    beforeEach(function() {
      let cards = {
        cards: returnFiveCast([ card('aceOfClubs'), card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs'), card('jackOfSpades')])
      };
      let otherCards = {
        cards: returnFiveCast([ card('aceOfDiamonds'), card('aceOfHearts'), card('kingOfDiamonds'), card('queenOfDiamonds'), card('tenOfSpades')]),
      };
      
      ({ firstPair, secondPair } = getPair(defaultParams, cards, otherCards));
    });

    it('should return 1 if higher', function() {
      expect(firstPair.compareTo(secondPair)).toEqual(1)
    })
    it('should return -1 if lower', function() {
      expect(secondPair.compareTo(firstPair)).toEqual(-1)
    })
    });

  
  describe('with the same kickers', function() {
    
    it('should return 0', function() {
      let cards = {
        cards: returnFiveCast([ card('aceOfClubs'), card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs'), card('jackOfSpades')])
      };
      let otherCards = {
        cards: returnFiveCast([ card('aceOfDiamonds'), card('aceOfHearts'), card('kingOfDiamonds'), card('queenOfDiamonds'), card('jackOfHearts')]),
      };
      
      ({ firstPair, secondPair } = getPair(defaultParams, cards, otherCards));
      expect(firstPair.compareTo(secondPair)).toEqual(0)
    })
  });
    
  });

});

