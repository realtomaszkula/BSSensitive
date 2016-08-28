import { HandRankSearch } from './../classes/hands/_handReading'
import { Trips } from './../classes/hands/Trips'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, TripsParams } from './../classes/hands/_interfaces'
import { card } from './helpers/methods'


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
    
  
  describe('when comparing to another trips', function() {
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