import { HandRankSearch } from './../../classes/hands/_handReading'
import { FullHouse } from './../../classes/hands/FullHouse'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, FullHouseParams } from './../../classes/_interfaces'
import { card } from './../helpers/methods'


describe('FullHouse', function() {
  let hand: FullHouse;
  describe('when creating an instance of FullHouse', function() {
    let params: FullHouseParams = {
      cards: [ card('aceOfSpades'), card('aceOfHearts'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfClubs')],
      handStrength: HandStrength.fullHouse,
      trips: CardValue.ace,
      pair: CardValue.king
    }
    hand = new FullHouse(params)

    
    it('should set trips correctly', function() {
      expect( hand.trips ).toEqual( CardValue.ace )
    });
    it('should set pair correctly', function() {
      expect( hand.pair ).toEqual( CardValue.king )
    });
      
  });
    
  
  describe('when comparing to another FullHouse', function() {
    
    describe('with different trips and pair', function() {
      let firstHand: FullHouse;
      let secondHand: FullHouse;
      
      beforeEach(function() {
        let firstParams: FullHouseParams = {
          cards: [ card('aceOfSpades'), card('aceOfHearts'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfClubs')],
          handStrength: HandStrength.fullHouse,
          trips: CardValue.ace,
          pair: CardValue.king
    }
        let secondParams: FullHouseParams = {
          cards: [ card('threeOfClubs'), card('threeOfSpades'), card('threeOfDiamonds'), card('fourOfClubs'), card('fourOfDiamonds')],
          handStrength: HandStrength.fullHouse,
          trips: CardValue.three,
          pair: CardValue.four
        }    

        firstHand = new FullHouse(firstParams)
        secondHand = new FullHouse(secondParams)
      });
        
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });

    });

    
    describe('with different pair and the same trips', function() {
      let firstHand: FullHouse;
      let secondHand: FullHouse;
      
      beforeEach(function() {
        let firstParams: FullHouseParams = {
          cards: [ card('aceOfSpades'), card('aceOfHearts'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfClubs')],
          handStrength: HandStrength.fullHouse,
          trips: CardValue.ace,
          pair: CardValue.king
    }
        let secondParams: FullHouseParams = {
          cards: [ card('aceOfSpades'), card('aceOfHearts'), card('aceOfDiamonds'), card('fourOfClubs'), card('fourOfDiamonds')],
          handStrength: HandStrength.fullHouse,
          trips: CardValue.ace,
          pair: CardValue.four
        }    

        firstHand = new FullHouse(firstParams)
        secondHand = new FullHouse(secondParams)
      });
        
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });
    });

    
    describe('with different trips and the same pair', function() {
      let firstHand: FullHouse;
      let secondHand: FullHouse;
      
      beforeEach(function() {
        let firstParams: FullHouseParams = {
          cards: [ card('aceOfSpades'), card('aceOfHearts'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfClubs')],
          handStrength: HandStrength.fullHouse,
          trips: CardValue.ace,
          pair: CardValue.king
      }
        let secondParams: FullHouseParams = {
          cards: [ card('threeOfClubs'), card('threeOfSpades'), card('threeOfDiamonds'), card('kingOfSpades'), card('kingOfClubs')],
          handStrength: HandStrength.fullHouse,
          trips: CardValue.three,
          pair: CardValue.king
        }    
  

        firstHand = new FullHouse(firstParams)
        secondHand = new FullHouse(secondParams)
      });
        
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });
    });
      
    describe('with the same pair and trips', function() {
      let firstHand: FullHouse;
      
      beforeEach(function() {
        let firstParams: FullHouseParams = {
          cards: [ card('aceOfSpades'), card('aceOfHearts'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfClubs')],
          handStrength: HandStrength.fullHouse,
          trips: CardValue.ace,
          pair: CardValue.king
      }

        firstHand = new FullHouse(firstParams)
      });
        
      it('should return 0 when the same', function() {
        expect( firstHand.compareTo(firstHand)).toEqual(0)
      });

    });
      
      
      
  });
    
});