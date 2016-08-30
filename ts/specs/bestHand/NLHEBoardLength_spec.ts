import { Card, CardClass, HandParams,  Suit, CardValue , HoldemHoleCards, OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams} from './../../classes/hands/_interfaces'
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
import { customMatchers } from './../helpers/customMatchers'

describe('TheBestHand', function() {
  
  beforeEach(function() {
    jasmine.addMatchers(customMatchers as any)
  });
    
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
          expect(theBestHand.result).toBeCardClassOf(HighCard)
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
          expect(theBestHand.result).toBeCardClassOf(Pair)
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
          expect(theBestHand.result).toBeCardClassOf(TwoPair)
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
          expect(theBestHand.result).toBeCardClassOf(Trips)
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
          expect(theBestHand.result).toBeCardClassOf(Straight)
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
          expect(theBestHand.result).toBeCardClassOf(Straight)
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
          expect(theBestHand.result).toBeCardClassOf(Flush)
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
          expect(theBestHand.result).toBeCardClassOf(FullHouse)
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
          expect(theBestHand.result).toBeCardClassOf(Quads)
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
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
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
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
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
          expect(theBestHand.result).toBeCardClassOf(HighCard)
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
          expect(theBestHand.result).toBeCardClassOf(Pair)
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
          expect(theBestHand.result).toBeCardClassOf(TwoPair)
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
          expect(theBestHand.result).toBeCardClassOf(Trips)
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
          expect(theBestHand.result).toBeCardClassOf(Straight)
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
          expect(theBestHand.result).toBeCardClassOf(Straight)
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
          expect(theBestHand.result).toBeCardClassOf(Flush)
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
          expect(theBestHand.result).toBeCardClassOf(FullHouse)
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
          expect(theBestHand.result).toBeCardClassOf(Quads)
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
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
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
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
      });
    }); // desc 4 cards
    

    
    describe('when given 3 cards', function() {
      describe('and hand of high card', function() {
      let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [ card('aceOfSpades'), card('jackOfDiamonds') ]
          let boardCards: Flop = [card('kingOfClubs'), card('queenOfspades'), card('threeOfSpades') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class HighCard', function() {
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: Flop = [card('kingOfClubs'), card('queenOfspades'), card('threeOfSpades') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Pair', function() {
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: Flop = [ card('kingOfClubs'), card('kingOfspades'), card('threeOfSpades')] 
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class TwoPair', function() {
          expect(theBestHand.result).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: Flop = [card('aceOfClubs'), card('queenOfspades'), card('threeOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Trips', function() {
          expect(theBestHand.result).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          let boardCards: Flop = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Straight', function() {
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('fiveOfDiamonds')]
          let boardCards: Flop = [card('duceOfspades'), card('threeOfSpades'), card('fourOfClubs')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Straight', function() {
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('kingOfSpades')]
          let boardCards: Flop = [card('eightOfSpades'), card('threeOfSpades'), card('fiveOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Flush', function() {
          expect(theBestHand.result).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: Flop = [card('aceOfClubs'), card('queenOfspades'), card('queenOfClubs')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class FullHouse', function() {
          expect(theBestHand.result).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          let boardCards: Flop = [card('aceOfClubs'), card('aceOfHearts'),card('queenOfClubs')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class Quads', function() {
          expect(theBestHand.result).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
          let playerCards: HoldemHoleCards = [ card('aceOfSpades'), card('kingOfSpades')]
          let boardCards: Flop = [ card('jackOfSpades'), card('tenOfSpades'), card('queenOfSpades') ]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class StraightFlush', function() {
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
      });

      describe('and hand including wheel straightflush', function() {
        let theBestHand: TheBestHand;
        beforeEach(function() {
        let playerCards: HoldemHoleCards = [card('aceOfSpades'), card('fiveOfSpades')]
          let boardCards: Flop = [card('threeOfSpades'),  card('duceOfSpades'), card('fourOfSpades')]
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
        });
        it('should return instance of class StraightFlush', function() {
          expect(theBestHand.result instanceof StraightFlush ).toBe(true)
        });
      });
    }); // desc 3 cards
    
    
  });  // NLHE

    
});