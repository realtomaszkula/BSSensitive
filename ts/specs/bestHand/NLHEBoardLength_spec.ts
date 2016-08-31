import { Card, CardClass, HandParams,  Suit, CardValue , HoldemHoleCards, OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams} from './../../classes/_interfaces'
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
  // running each test twice with reversed arr to make sure the order of cards does not affect the result
  describe('NLHE', function() {
    let playerCards: HoldemHoleCards;
    let theBestHand: TheBestHand;
    describe('when given 5 board cards', function() {
      let boardCards: FlopTurnRiver;
      describe('and hand of high card', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('jackOfDiamonds') ]
          boardCards = [card('kingOfClubs'), card('queenOfspades'), card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ]
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('kingOfClubs'), card('queenOfspades'), card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ]
        });
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [ card('kingOfClubs'), card('kingOfspades'), card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')] 
        });
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(TwoPair)
        });
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('aceOfClubs'), card('queenOfspades'), card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
        });
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Trips)
        });
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          boardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          boardCards = [card('queenOfClubs'), card('duceOfspades'), card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfSpades')]
          boardCards = [card('queenOfClubs'), card('eightOfSpades'), card('threeOfSpades'), card('fourOfClubs'), card('fiveOfSpades')]
        });
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Flush)
        });
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('aceOfClubs'), card('queenOfspades'), card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds')]
        });
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(FullHouse)
        });
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('aceOfClubs'), card('aceOfHearts'), card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds')]
        });
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Quads)
        });
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('kingOfSpades')]
          boardCards = [ card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ]
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfSpades')]
          boardCards = [card('queenOfSpades'), card('threeOfSpades'), card('duceOfSpades'), card('fourOfSpades'), card('fiveOfSpades')]
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
      });
    }); // desc 5 cards
    
    describe('when given 4 board cards', function() {
    let boardCards: FlopTurn;
     describe('and hand of high card', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('jackOfDiamonds') ]
          boardCards = [card('kingOfClubs'), card('queenOfspades'),card('threeOfSpades'), card('fourOfClubs') ]
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('kingOfClubs'), card('queenOfspades'), card('threeOfSpades'), card('fourOfClubs') ]
          
        });
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [ card('kingOfClubs'), card('kingOfspades'), card('threeOfSpades'), card('fourOfClubs')] 
        });
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(TwoPair)
        });
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('aceOfClubs'), card('queenOfspades'), card('threeOfSpades'), card('fourOfClubs')]
        });
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Trips)
        });
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          boardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades'), card('fourOfClubs')]
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          boardCards = [card('duceOfspades'), card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfSpades')]
          boardCards = [card('eightOfSpades'), card('threeOfSpades'), card('fourOfClubs'), card('fiveOfSpades')]
        });
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Flush)
        });
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('aceOfClubs'), card('queenOfspades'), card('threeOfSpades'), card('queenOfClubs')]
        });
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(FullHouse)
        });
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('aceOfClubs'), card('aceOfHearts'), card('threeOfSpades'), card('queenOfClubs')]
        });
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Quads)
        });
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('kingOfSpades')]
          boardCards = [ card('jackOfSpades'), card('tenOfSpades'), card('queenOfSpades'), card('fiveOfDiamonds') ]
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
      });

      describe('and hand including wheel straightflush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfSpades')]
          boardCards = [card('threeOfSpades'), card('duceOfSpades'), card('fourOfSpades'), card('fiveOfSpades')]
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
      });
    }); // desc 4 cards
    

    
    describe('when given 3 cards', function() {
      let boardCards: Flop;
      describe('and hand of high card', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('jackOfDiamonds') ]
          boardCards = [card('kingOfClubs'), card('queenOfspades'), card('threeOfSpades') ]
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('kingOfClubs'), card('queenOfspades'), card('threeOfSpades') ]
        });
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [ card('kingOfClubs'), card('kingOfspades'), card('threeOfSpades')] 
        });
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(TwoPair)
        });
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('aceOfClubs'), card('queenOfspades'), card('threeOfSpades')]
        });
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Trips)
        });
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds')]
          boardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades')]
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('fiveOfDiamonds')]
          boardCards = [card('duceOfspades'), card('threeOfSpades'), card('fourOfClubs')]
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfSpades')]
          boardCards = [card('eightOfSpades'), card('threeOfSpades'), card('fiveOfSpades')]
        });
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Flush)
        });
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('aceOfClubs'), card('queenOfspades'), card('queenOfClubs')]
        });
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(FullHouse)
        });
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds')]
          boardCards = [card('aceOfClubs'), card('aceOfHearts'),card('queenOfClubs')]
        });
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Quads)
        });
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('kingOfSpades')]
          boardCards = [ card('jackOfSpades'), card('tenOfSpades'), card('queenOfSpades') ]
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
      });

      describe('and hand including wheel straightflush', function() {
        beforeEach(function() {
        playerCards = [card('aceOfSpades'), card('fiveOfSpades')]
          boardCards = [card('threeOfSpades'),  card('duceOfSpades'), card('fourOfSpades')]
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result instanceof StraightFlush ).toBe(true)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards })
          expect(theBestHand.result instanceof StraightFlush ).toBe(true)
        });
      });
    }); // desc 3 cards
    
    
  });  // NLHE

    
});