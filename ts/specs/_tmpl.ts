import { HandRankSearch } from './../classes/hands/_handReading'
import { Trips } from './../classes/hands/Trips'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, TripsParams } from './../classes/hands/_interfaces'
import { card } from './helpers/methods'


describe('Trips', function() {
  let hand: Trips;
  describe('when creating an instance of Trips', function() {
    let params: TripsParams;
    hand = new Trips(params)
  });
    
  
  describe('when comparing to another trips', function() {
    let firstHand: Trips;
    let secondHand: Trips;
    
    beforeEach(function() {
      let firstParams: TripsParams;
      let secondParams: TripsParams;    


      firstHand = new Trips(firstParams)
      secondHand = new Trips(secondParams)
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
    
});