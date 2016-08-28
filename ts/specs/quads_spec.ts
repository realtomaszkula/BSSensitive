import { HandRankSearch } from './../classes/hands/_handReading'
import { Quads } from './../classes/hands/Quads'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, QuadsParams } from './../classes/hands/_interfaces'
import { card } from './helpers/methods'


describe('Quads', function() {
  let hand: Quads;
  describe('when creating an instance of Quads', function() {
    let params: QuadsParams = {
      cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('aceOfHearts'), card('kingOfClubs')],
      handStrength: HandStrength.quads,
      quads: CardValue.ace
    }
    hand = new Quads(params)
    
    it('should set quads correctly', function() {
      expect(hand.quads).toEqual(CardValue.ace)
    });
      
  });
    
  
  describe('when comparing to another Quads', function() {
    
    
    describe('with different quad hand', function() {
    let firstHand: Quads;
    let secondHand: Quads;
      beforeEach(function() {
        let firstParams: QuadsParams = {
          cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('aceOfHearts'), card('kingOfClubs')],
          handStrength: HandStrength.quads,
          quads: CardValue.ace
        }
        let secondParams: QuadsParams = {
          cards: [card('queenOfSpades'), card('queenOfDiamonds'), card('queenOfClubs'), card('queenOfHearts'), card('kingOfClubs')],
          handStrength: HandStrength.quads,
          quads: CardValue.queen
        }   

        firstHand = new Quads(firstParams)
        secondHand = new Quads(secondParams)
      });
      
      it('should return 1 when higher', function() {
        expect( firstHand.resolveConflict(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.resolveConflict(firstHand)).toEqual(-1)
      });

    });

    describe('with same quad hand and different kicker', function() {
    let firstHand: Quads;
    let secondHand: Quads;
      beforeEach(function() {
        let firstParams: QuadsParams = {
          cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('aceOfHearts'), card('kingOfClubs')],
          handStrength: HandStrength.quads,
          quads: CardValue.ace
        }
        let secondParams: QuadsParams = {
          cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('aceOfHearts'), card('queenOfClubs')],
          handStrength: HandStrength.quads,
          quads: CardValue.ace
        }

        firstHand = new Quads(firstParams)
        secondHand = new Quads(secondParams)
      });
      
      it('should return 1 when higher', function() {
        expect( firstHand.resolveConflict(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.resolveConflict(firstHand)).toEqual(-1)
      });

    });

    describe('with same quad hand and the same kicker', function() {
    let firstHand: Quads;
      beforeEach(function() {
        let firstParams: QuadsParams = {
          cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('aceOfHearts'), card('kingOfClubs')],
          handStrength: HandStrength.quads,
          quads: CardValue.ace
        }
        firstHand = new Quads(firstParams)
      });
      
      it('should return 0', function() {
        expect( firstHand.resolveConflict(firstHand)).toEqual(0)
      });
    });
      
  });
    
});