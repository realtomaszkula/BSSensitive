import { HandRankSearch } from './../../classes/hands/_handReading'
import { Trips } from './../../classes/hands/Trips'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, TripsParams } from './../../classes/hands/_interfaces'
import { card } from './../helpers/methods'


describe('Trips', function() {
  let hand: Trips;
  describe('when creating an instance of Trips', function() {
    let params: TripsParams = {
      cards: [ card('aceOfClubs'), card('aceOfDiamonds'), card('aceOfSpades'), card('threeOfClubs'), card('duceOfClubs')],
      handStrength: HandStrength.trips,
      trips: CardValue.ace
    }

    hand = new Trips(params)

    
    it('should set trips correctly', function() {
      expect( hand.trips ).toEqual( CardValue.ace )
    });
  });
    
  
  describe('when comparing to different trips', function() {
    let firstHand: Trips;
    let secondHand: Trips;
    
    beforeEach(function() {
      let firstParams: TripsParams = {
        cards: [ card('aceOfClubs'), card('aceOfDiamonds'), card('aceOfSpades'), card('threeOfClubs'), card('duceOfClubs')],
        handStrength: HandStrength.trips,
        trips: CardValue.ace
      }
      let secondParams: TripsParams = {
        cards: [ card('kingOfClubs'), card('kingOfDiamonds'), card('kingOfSpades'), card('threeOfClubs'), card('duceOfClubs')],
        handStrength: HandStrength.trips,
        trips: CardValue.king
      }

      firstHand = new Trips(firstParams)
      secondHand = new Trips(secondParams)
    })

    
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
  describe('when comparing to the same trips', function() {
    let firstHand: Trips;
    let secondHand: Trips;

    describe('with one different kicker ', function() {
      beforeEach(function() {
        let firstParams: TripsParams = {
          cards: [ card('aceOfClubs'), card('aceOfDiamonds'), card('aceOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.trips,
          trips: CardValue.ace
        }
        let secondParams: TripsParams = {
          cards: [ card('aceOfClubs'), card('aceOfDiamonds'), card('aceOfSpades'), card('tenOfSpades'), card('eightOfSpades')],
          handStrength: HandStrength.trips,
          trips: CardValue.ace
        }

        firstHand = new Trips(firstParams)
        secondHand = new Trips(secondParams)
      })

      
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });
      

    });

    describe('with two different kickers ', function() {
    let firstHand: Trips;
    let secondHand: Trips;
      beforeEach(function() {
        let firstParams: TripsParams = {
          cards: [ card('aceOfClubs'), card('aceOfDiamonds'), card('aceOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.trips,
          trips: CardValue.ace
        }
        let secondParams: TripsParams = {
          cards: [ card('aceOfClubs'), card('aceOfDiamonds'), card('aceOfSpades'), card('eightOfSpades'), card('sevenOfSpades')],
          handStrength: HandStrength.trips,
          trips: CardValue.ace
        }

        firstHand = new Trips(firstParams)
        secondHand = new Trips(secondParams)
      })
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });
    });
      
    
    describe('and the same kickers', function() {
      let firstHand: Trips;
      beforeEach(function() {
        let firstParams: TripsParams = {
          cards: [ card('aceOfClubs'), card('aceOfDiamonds'), card('aceOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.trips,
          trips: CardValue.ace
        }
        firstHand = new Trips(firstParams)
      })
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(firstHand)).toEqual(0)
      });
    });
      
  
    
  });

});