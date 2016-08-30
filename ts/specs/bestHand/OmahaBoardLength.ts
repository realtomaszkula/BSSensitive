import { Card, CardClass, HandParams,  Suit, CardValue , OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams} from './../classes/hands/_interfaces'
import { TheBestHand } from './../../classes/hands/_theBestHand'
import { HighCard } from './../../classes/hands/HighCard'
import { Pair } from './../../classes/hands/Pair'
import { TwoPair } from './../../classes/hands/TwoPair'
import { Trips } from './../../classes/hands/Trips'
import { Straight } from './../../classes/hands/Straight'
import { Flush } from './../../classes/hands/Flush'
import { FullHouse } from './../../classes/hands/FullHouse'
import { Quads } from './../../classes/hands/Quads'
import { StraightFlush } from './../../classes/hands/StraightFlush'
import { card } from './../helpers/methods'

describe('TheBestHand', function() {
  
  describe('Omaha', function() {
    describe('when given 9 cards', function() {
      
      describe('and hand of high card', function() {
      let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [ card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfspades') ]
          let boardCards: BoardCards = [ card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
          
        it('should return instance of class HighCard', function() {
          expect(theBestHand.result instanceof HighCard ).toBe(true)
        });
      });

      describe('and hand including pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfspades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds')  ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class Pair', function() {
          expect(theBestHand.result instanceof Pair ).toBe(true)
        });
      });

      describe('and hand including two pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfspades'), card('threeOfSpades'), card('fourOfClubs')]
          let boardCards: BoardCards = [ card('aceOfDiamonds'), card('kingOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds')] 
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class TwoPair', function() {
          expect(theBestHand.result instanceof TwoPair ).toBe(true)
        });
      });

      describe('and hand including trips', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('queenOfspades'), card('fiveOfDiamonds')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('aceOfClubs'), card('sevenOfDiamonds'), card('nineOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class Trips', function() {
          expect(theBestHand.result instanceof Trips ).toBe(true)
        });
      });

      describe('and hand including straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('fourOfClubs'), card('fiveOfDiamonds')]
          let boardCards: BoardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades'), card('sevenOfDiamonds'), card('nineOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class Straight', function() {
          expect(theBestHand.result instanceof Straight ).toBe(true)
        });
      });

      describe('and hand including wheel straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('duceOfspades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'),  card('sevenOfDiamonds'), card('nineOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class Straight', function() {
          expect(theBestHand.result instanceof Straight ).toBe(true)
        });
      });

      describe('and hand including flush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs') , card('nineOfDiamonds'),]
          let boardCards: BoardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class Flush', function() {
          expect(theBestHand.result instanceof Flush ).toBe(true)
        });
      });

      describe('and hand including fullhouse', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'),  card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds'), card('aceOfClubs'), card('queenOfspades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class FullHouse', function() {
          expect(theBestHand.result instanceof FullHouse ).toBe(true)
        });
      });

      describe('and hand including quads', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds'), card('aceOfClubs'), card('aceOfHearts')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class Quads', function() {
          expect(theBestHand.result instanceof Quads ).toBe(true)
        });
      });

      describe('and hand including straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: OmahaHoleCards = [ card('aceOfSpades'), card('kingOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
          let boardCards: BoardCards = [card('tenOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('queenOfSpades'), card('jackOfSpades') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class StraightFlush', function() {
          expect(theBestHand.result instanceof StraightFlush ).toBe(true)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
        let playerCards: OmahaHoleCards = [card('aceOfSpades'), card('duceOfSpades') ,card('kingOfSpades'), card('sevenOfDiamonds') ]
          let boardCards: BoardCards = [card('fourOfSpades'), card('fiveOfSpades'), card('queenOfSpades'), card('threeOfSpades'), card('eightOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})

        });
          
        it('should return instance of class StraightFlush', function() {
          expect(theBestHand.result instanceof StraightFlush ).toBe(true)
        });
      });
    }); // desc 9 cards
    
    describe('when given 8 cards', function() {
      
    }); // desc 8 cards cards
    

    
    describe('when given 7 cards', function() {
      
    }); // desc 7 cards
    
    
  });  // NLHE

    
});