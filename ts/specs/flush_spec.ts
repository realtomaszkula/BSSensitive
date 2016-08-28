import { HandRankSearch } from './../classes/hands/_handReading'
import { Flush } from './../classes/hands/Flush'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, FlushParams } from './../classes/hands/_interfaces'
import { card } from './helpers/methods'


describe('Flush', function() {

  describe('when comparing to another Flush', function() {
    let firstHand: Flush;
    let secondHand: Flush;
    
    describe('made of the same five cards', function() {
      beforeEach(function() {
        let firstParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.flush
        }
        let secondParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.flush
        }
        firstHand = new Flush(firstParams)
        secondHand = new Flush(secondParams)
      });
      
      it('should return 0', function() {
        expect( secondHand.compareTo(secondHand)).toEqual(0)
      });
    });

    describe('made of the same four cards', function() {
      beforeEach(function() {
        let firstParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.flush
        }
        let secondParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('eightOfSpades')],
          handStrength: HandStrength.flush
        }
        firstHand = new Flush(firstParams)
        secondHand = new Flush(secondParams)
      });
      
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });
    });

    describe('made of the same three cards', function() {
      beforeEach(function() {
        let firstParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.flush
        }
        let secondParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('eightOfSpades'), card('sevenOfSpades')],
          handStrength: HandStrength.flush
        }
        firstHand = new Flush(firstParams)
        secondHand = new Flush(secondParams)
      });
      
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });
    });

    describe('made of the same two cards', function() {
      beforeEach(function() {
        let firstParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.flush
        }
        let secondParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('eightOfSpades'), card('sevenOfSpades'), card('sixOfSpades')],
          handStrength: HandStrength.flush
        }
        firstHand = new Flush(firstParams)
        secondHand = new Flush(secondParams)
      });
      
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });
    });

    describe('made of the same one card', function() {
      beforeEach(function() {
        let firstParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.flush
        }
        let secondParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('eightOfSpades'), card('sevenOfSpades'), card('sixOfSpades'), card('fiveOfSpades')],
          handStrength: HandStrength.flush
        }
        firstHand = new Flush(firstParams)
        secondHand = new Flush(secondParams)
      });
      
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });
    });

    describe('made of different cards', function() {
      beforeEach(function() {
        let firstParams: FlushParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
          handStrength: HandStrength.flush
        }
        let secondParams: FlushParams = {
          cards: [ card('kingOfSpades'), card('eightOfSpades'), card('sevenOfSpades'), card('sixOfSpades'), card('fiveOfSpades')],
          handStrength: HandStrength.flush
        }
        firstHand = new Flush(firstParams)
        secondHand = new Flush(secondParams)
      });
      
      it('should return 1 when higher', function() {
        expect( firstHand.compareTo(secondHand)).toEqual(1)
      });

      it('should return -1 when lower', function() {
        expect( secondHand.compareTo(firstHand)).toEqual(-1)
      });
    });



    });
});