import { HandRankSearch } from './../classes/hands/_handReading'
import { Straight } from './../classes/hands/Straight'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, StraightParams } from './../classes/hands/_interfaces'
import { card } from './helpers/methods'


describe('Straight', function() {
  let hand: Straight;
  describe('when creating an instance of Straight', function() {
    let params: StraightParams = {
      cards: [ card('aceOfSpades'), card('kingOfClubs'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfHearts')],
      handStrength: HandStrength.straight,
    }
    let hand = new Straight(params)

    it('should set highest card correctly', function() {
      expect( hand.highestCard ).toEqual( CardValue.ace )
    });
      
  });
    
  
  describe('when comparing to another Straight', function() {
    let firstHand: Straight;
    let secondHand: Straight;
    
    beforeEach(function() {
      let firstParams: StraightParams = {
        cards: [ card('aceOfSpades'), card('kingOfClubs'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfHearts')],
        handStrength: HandStrength.straight,
      }
      let secondParams: StraightParams = {
        cards: [ card('kingOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfHearts'), card('nineOfClubs')],
        handStrength: HandStrength.straight,
      };
      firstHand = new Straight(firstParams)
      secondHand = new Straight(secondParams);    
    });

    it('should return 1 when higher', function() {
      expect( firstHand.resolveConflict(secondHand)).toEqual(1)
    });

    it('should return -1 when lower', function() {
      expect( secondHand.resolveConflict(firstHand)).toEqual(-1)
    });

    it('should return 0 if the same', function() {
      expect( secondHand.resolveConflict(secondHand)).toEqual(0)
    });
      
  });

  describe('when comparing wheel str8 to another Straight', function() {
    let firstHand: Straight;
    let secondHand: Straight;
    
    beforeEach(function() {
      let firstParams: StraightParams = {
        cards: [ card('sixOfDiamonds'), card('fiveOfSpades'), card('fourOfSpades'), card('threeOfClubs'), card('duceOfSpades')],
        handStrength: HandStrength.straight,
      };    
      let secondParams: StraightParams = {
        cards: [ card('fiveOfSpades'), card('fourOfSpades'), card('threeOfClubs'), card('duceOfSpades'), card('aceOfDiamonds')],
        handStrength: HandStrength.straight,
      };    
      firstHand = new Straight(firstParams)
      secondHand = new Straight(secondParams)

    });

    it('should return 1 when higher', function() {
            console.log(firstHand)
      console.log(secondHand)
      expect( firstHand.resolveConflict(secondHand)).toEqual(1)
    });

    it('should return -1 when lower', function() {
      expect( secondHand.resolveConflict(firstHand)).toEqual(-1)
    });

    it('should return 0 if the same', function() {
      expect( secondHand.resolveConflict(secondHand)).toEqual(0)
    });
      
  });
    
});