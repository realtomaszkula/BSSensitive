import { Card, CardClass, HandParams,  Suit, CardValue , HoldemHoleCards, OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams} from './../classes/hands/_interfaces'
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
  
  describe('NLHE', function() {
    describe('when given 5 board cards', function() {
      describe('and hand of high card', function() {
      let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [ card('aceOfSpades'), card('jackOfDiamonds') ]
          let boardCards: FlopTurnRiver = [card('kingOfClubs'), card('queenOfspades'), 
              card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class HighCard', function() {
          expect(theBestHand.result instanceof HighCard ).toBe(true)
        });
      });

      describe('and hand including pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurnRiver = [card('kingOfClubs'), card('queenOfspades'), 
              card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Pair', function() {
          expect(theBestHand.result instanceof Pair ).toBe(true)
        });
      });

      describe('and hand including two pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurnRiver = [ card('kingOfClubs'), card('kingOfspades'), 
              card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')] 
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class TwoPair', function() {
          expect(theBestHand.result instanceof TwoPair ).toBe(true)
        });
      });

      describe('and hand including trips', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurnRiver = [card('aceOfClubs'), card('queenOfspades'), 
              card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Trips', function() {
          expect(theBestHand.result instanceof Trips ).toBe(true)
        });
      });

      describe('and hand including straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          let boardCards: FlopTurnRiver = [card('queenOfClubs'), card('jackOfspades'), 
              card('tenOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Straight', function() {
          expect(theBestHand.result instanceof Straight ).toBe(true)
        });
      });

      describe('and hand including wheel straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          let boardCards: FlopTurnRiver = [card('queenOfClubs'), card('duceOfspades'), 
              card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Straight', function() {
          expect(theBestHand.result instanceof Straight ).toBe(true)
        });
      });

      describe('and hand including flush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfSpades')]
          let boardCards: FlopTurnRiver = [card('queenOfClubs'), card('eightOfSpades'), 
              card('threeOfSpades'), card('fourOfClubs'), card('fiveOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Flush', function() {
          expect(theBestHand.result instanceof Flush ).toBe(true)
        });
      });

      describe('and hand including fullhouse', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurnRiver = [card('aceOfClubs'), card('queenOfspades'), 
              card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class FullHouse', function() {
          expect(theBestHand.result instanceof FullHouse ).toBe(true)
        });
      });

      describe('and hand including quads', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurnRiver = [card('aceOfClubs'), card('aceOfHearts'), 
              card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Quads', function() {
          expect(theBestHand.result instanceof Quads ).toBe(true)
        });
      });

      describe('and hand including straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [ card('aceOfSpades'), card('kingOfSpades')]
          let boardCards: FlopTurnRiver = [ card('queenOfSpades'), card('jackOfSpades'), 
              card('tenOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class StraightFlush', function() {
          expect(theBestHand.result instanceof StraightFlush ).toBe(true)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
        let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfSpades')]
          let boardCards: FlopTurnRiver = [card('queenOfSpades'), card('threeOfSpades'), 
              card('duceOfSpades'), card('fourOfSpades'), card('fiveOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class StraightFlush', function() {
          expect(theBestHand.result instanceof StraightFlush ).toBe(true)
        });
      });
    }); // desc 5 cards
    
    describe('when given 4 board cards', function() {
     describe('and hand of high card', function() {
      let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [ card('aceOfSpades'), card('jackOfDiamonds') ]
          let boardCards: FlopTurn = [card('kingOfClubs'), card('queenOfspades'), 
              card('threeOfSpades'), card('fourOfClubs') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class HighCard', function() {
          expect(theBestHand.result instanceof HighCard ).toBe(true)
        });
      });

      describe('and hand including pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurn = [card('kingOfClubs'), card('queenOfspades'), 
              card('threeOfSpades'), card('fourOfClubs') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Pair', function() {
          expect(theBestHand.result instanceof Pair ).toBe(true)
        });
      });

      describe('and hand including two pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurn = [ card('kingOfClubs'), card('kingOfspades'), 
              card('threeOfSpades'), card('fourOfClubs')] 
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class TwoPair', function() {
          expect(theBestHand.result instanceof TwoPair ).toBe(true)
        });
      });

      describe('and hand including trips', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurn = [card('aceOfClubs'), card('queenOfspades'), 
              card('threeOfSpades'), card('fourOfClubs')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Trips', function() {
          expect(theBestHand.result instanceof Trips ).toBe(true)
        });
      });

      describe('and hand including straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          let boardCards: FlopTurn = [card('queenOfClubs'), card('jackOfspades'), 
              card('tenOfSpades'), card('fourOfClubs')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Straight', function() {
          expect(theBestHand.result instanceof Straight ).toBe(true)
        });
      });

      describe('and hand including wheel straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          let boardCards: FlopTurn = [card('duceOfspades'), 
              card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Straight', function() {
          expect(theBestHand.result instanceof Straight ).toBe(true)
        });
      });

      describe('and hand including flush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfSpades')]
          let boardCards: FlopTurn = [card('eightOfSpades'), 
              card('threeOfSpades'), card('fourOfClubs'), card('fiveOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Flush', function() {
          expect(theBestHand.result instanceof Flush ).toBe(true)
        });
      });

      describe('and hand including fullhouse', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurn = [card('aceOfClubs'), card('queenOfspades'), 
              card('threeOfSpades'), card('queenOfClubs')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class FullHouse', function() {
          expect(theBestHand.result instanceof FullHouse ).toBe(true)
        });
      });

      describe('and hand including quads', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: FlopTurn = [card('aceOfClubs'), card('aceOfHearts'), 
              card('threeOfSpades'), card('queenOfClubs')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Quads', function() {
          expect(theBestHand.result instanceof Quads ).toBe(true)
        });
      });

      describe('and hand including straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [ card('aceOfSpades'), card('kingOfSpades')]
          let boardCards: FlopTurn = [ card('jackOfSpades'), 
              card('tenOfSpades'), card('queenOfSpades'), card('fiveOfDiamonds') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class StraightFlush', function() {
          expect(theBestHand.result instanceof StraightFlush ).toBe(true)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
        let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfSpades')]
          let boardCards: FlopTurn = [card('threeOfSpades'), 
              card('duceOfSpades'), card('fourOfSpades'), card('fiveOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class StraightFlush', function() {
          expect(theBestHand.result instanceof StraightFlush ).toBe(true)
        });
      });
    }); // desc 4 cards
    

    
    describe('when given 5 cards', function() {
    }); // desc 3 cards
    
    
  });  // NLHE

    
});