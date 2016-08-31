import { HandRankSearch } from './../../classes/hands/_handReading'
import { HighCard } from './../../classes/hands/HighCard'
import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, HighCardParams } from './../../classes/_interfaces'
import { card } from './../helpers/methods'


describe('HighCard', function() {

  describe('when comparing to another HighCard', function() {
    let firstHand: HighCard;
    let secondHand: HighCard;
    
    describe('made of the same five cards', function() {
      beforeEach(function() {
        let firstParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfClubs')],
          handStrength: HandStrength.highCard
        }
        let secondParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfClubs')],
          handStrength: HandStrength.highCard
        }
        firstHand = new HighCard(firstParams)
        secondHand = new HighCard(secondParams)
      });
      
      it('should return 0', function() {
        expect( secondHand.compareTo(secondHand)).toEqual(0)
      });
    });

    describe('made of the same four cards', function() {
      beforeEach(function() {
        let firstParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfClubs')],
          handStrength: HandStrength.highCard
        }
        let secondParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('eightOfClubs')],
          handStrength: HandStrength.highCard
        }
        firstHand = new HighCard(firstParams)
        secondHand = new HighCard(secondParams)
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
        let firstParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfClubs')],
          handStrength: HandStrength.highCard
        }
        let secondParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('eightOfSpades'), card('sevenOfClubs')],
          handStrength: HandStrength.highCard
        }
        firstHand = new HighCard(firstParams)
        secondHand = new HighCard(secondParams)
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
        let firstParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfClubs')],
          handStrength: HandStrength.highCard
        }
        let secondParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('eightOfSpades'), card('sevenOfSpades'), card('sixOfClubs')],
          handStrength: HandStrength.highCard
        }
        firstHand = new HighCard(firstParams)
        secondHand = new HighCard(secondParams)
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
        let firstParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfClubs')],
          handStrength: HandStrength.highCard
        }
        let secondParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('eightOfSpades'), card('sevenOfSpades'), card('sixOfSpades'), card('fiveOfClubs')],
          handStrength: HandStrength.highCard
        }
        firstHand = new HighCard(firstParams)
        secondHand = new HighCard(secondParams)
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
        let firstParams: HighCardParams = {
          cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfClubs')],
          handStrength: HandStrength.highCard
        }
        let secondParams: HighCardParams = {
          cards: [ card('kingOfSpades'), card('eightOfSpades'), card('sevenOfSpades'), card('sixOfSpades'), card('fiveOfClubs')],
          handStrength: HandStrength.highCard
        }
        firstHand = new HighCard(firstParams)
        secondHand = new HighCard(secondParams)
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