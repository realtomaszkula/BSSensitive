import { Card, CardClass, HandParams,  Suit, CardValue } from './../classes/hands/_interfaces'
import { TheBestHand } from './../classes/hands/_theBestHand'
import { HighCard } from './../classes/hands/HighCard'
import { Pair } from './../classes/hands/Pair'
import { TwoPair } from './../classes/hands/TwoPair'
import { Trips } from './../classes/hands/Trips'
import { Straight } from './../classes/hands/Straight'
import { Flush } from './../classes/hands/Flush'
import { FullHouse } from './../classes/hands/FullHouse'
import { Quads } from './../classes/hands/Quads'
import { StraightFlush } from './../classes/hands/StraightFlush'
import { card } from './helpers/methods'

describe('TheBestHand', function() {
  
  
  describe('when given 7 cards', function() {
    describe('with the best hand of high card', function() {
    let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfspades'), 
            card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class Pair', function() {
        expect(theBestHand.result instanceof HighCard ).toBe(true)
      });
    });

    describe('when given hand including pair', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfspades'), 
            card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class Pair', function() {
        expect(theBestHand.result instanceof Pair ).toBe(true)
      });
    });

    describe('when given hand including two pair', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('kingOfspades'), 
            card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class TwoPair', function() {
        expect(theBestHand.result instanceof TwoPair ).toBe(true)
      });
    });

    describe('when given hand including trips', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('queenOfspades'), 
            card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class Trips', function() {
        expect(theBestHand.result instanceof Trips ).toBe(true)
      });
    });

    describe('when given hand including straight', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('jackOfspades'), 
            card('tenOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class Straight', function() {
        expect(theBestHand.result instanceof Straight ).toBe(true)
      });
    });

    describe('when given hand including wheel straight', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('duceOfspades'), 
            card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class Straight', function() {
        expect(theBestHand.result instanceof Straight ).toBe(true)
      });
    });

    describe('when given hand including flush', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs'), card('eightOfSpades'), 
            card('threeOfSpades'), card('fourOfSlubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class Flush', function() {
        expect(theBestHand.result instanceof Flush ).toBe(true)
      });
    });

    describe('when given hand including fullhouse', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('queenOfspades'), 
            card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class FullHouse', function() {
        expect(theBestHand.result instanceof FullHouse ).toBe(true)
      });
    });

    describe('when given hand including quads', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('aceOfHearts'), 
            card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class Quads', function() {
        expect(theBestHand.result instanceof Quads ).toBe(true)
      });
    });

    describe('when given hand including straightflush', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('kingOfSpades'), card('queenOfSpades'), card('jackOfSpades'), 
            card('tenOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class StraightFlush', function() {
        expect(theBestHand.result instanceof StraightFlush ).toBe(true)
      });
    });

    
    describe('when given hand including wheel straightflush', function() {
      let theBestHand: TheBestHand;
      beforeEach(function() {
        theBestHand =  new TheBestHand([  card('aceOfSpades'), card('kingOfSpades'), card('queenOfSpades'), card('threeOfSpades'), 
            card('duceOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ])
      });
        
      it('should return instance of class StraightFlush', function() {
        expect(theBestHand.result instanceof StraightFlush ).toBe(true)
      });
    });
  }); // desc 5 cards


  
  describe('when given 6 cards', function() {
    
  }); // desc 6 cards
  

  
  describe('when given 5 cards', function() {
    
  }); // desc 5 cards
    
    
  

    
});