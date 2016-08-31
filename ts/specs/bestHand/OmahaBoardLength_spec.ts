import { Card, CardClass, HandParams,  Suit, CardValue , OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams} from './../../classes/_interfaces'
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
  // running each test twice with reversed arr to make sure the order doesn't matter
  describe('Omaha', function() {
    let playerCards: OmahaHoleCards;
    let theBestHand: TheBestHand;
    describe('when given 5 board cards', function() {
      let boardCards: FlopTurnRiver;
      describe('and hand of high card', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfspades') ]
          boardCards = [ card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds') ]
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect(theBestHand.result).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfspades')]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds')  ]
        });
          
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Pair)
        });
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfspades'), card('threeOfSpades'), card('fourOfClubs')]
          boardCards = [ card('aceOfDiamonds'), card('kingOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds')] 
        });
          
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(TwoPair)
        });
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('queenOfspades'), card('fiveOfDiamonds')]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('aceOfClubs'), card('sevenOfDiamonds'), card('nineOfDiamonds')]
        });
          
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Trips)
        });
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('fourOfClubs'), card('fiveOfDiamonds')]
          boardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades'), card('sevenOfDiamonds'), card('nineOfDiamonds')]
        });
          
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('duceOfspades')]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'),  card('sevenOfDiamonds'), card('nineOfDiamonds')]
        });
          
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs') , card('nineOfDiamonds'),]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
        });
          
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Flush)
        });
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'),  card('sevenOfDiamonds') , card('eightOfSpades')]
          boardCards = [card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds'), card('aceOfClubs'), card('queenOfspades')]
        });
          
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(FullHouse)
        });
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('sevenOfDiamonds') , card('eightOfSpades')]
          boardCards = [card('threeOfSpades'), card('queenOfClubs'), card('fiveOfDiamonds'), card('aceOfClubs'), card('aceOfHearts')]
        });
          
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Quads)
        });
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('kingOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
          boardCards = [card('tenOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('queenOfSpades'), card('jackOfSpades') ]
        });
          
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(StraightFlush)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('duceOfSpades') ,card('kingOfSpades'), card('sevenOfDiamonds') ]
          boardCards = [card('fourOfSpades'), card('fiveOfSpades'), card('queenOfSpades'), card('threeOfSpades'), card('eightOfSpades')]
        });
          
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });
    }); // desc 5 board
    
    describe('when given 4 boad cards', function() {
      let boardCards: FlopTurn;
      describe('and hand of high card', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfspades') ]
          boardCards = [ card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds') ]
          
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(HighCard)
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfspades')]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds')  ]
          
        });
          
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfspades'), card('threeOfSpades'), card('fourOfClubs')]
          boardCards = [ card('aceOfDiamonds'), card('kingOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds')] 
          
        });
          
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(TwoPair)
        });
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('queenOfspades'), card('fiveOfDiamonds')]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('aceOfClubs'), card('sevenOfDiamonds')]
          
        });
          
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Trips)
        });
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('fourOfClubs'), card('fiveOfDiamonds')]
          boardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades'), card('sevenOfDiamonds')]
          
        });
          
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('duceOfspades')]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'),  card('sevenOfDiamonds')]
          
        });
          
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs') , card('nineOfDiamonds'),]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfSpades'), card('eightOfSpades')]
          
        });
          
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Flush)
        });
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'),  card('sevenOfDiamonds') , card('eightOfSpades')]
          boardCards = [card('queenOfClubs'), card('fiveOfDiamonds'), card('aceOfClubs'), card('queenOfspades')]
          
        });
          
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(FullHouse)
        });
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('sevenOfDiamonds') , card('eightOfSpades')]
          boardCards = [card('threeOfSpades'),  card('fiveOfDiamonds'), card('aceOfClubs'), card('aceOfHearts')]
          
        });
          
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Quads)
        });
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('kingOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
          boardCards = [card('tenOfSpades'), card('fourOfClubs'), card('queenOfSpades'), card('jackOfSpades') ]
          
        });
          
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('duceOfSpades') ,card('kingOfSpades'), card('sevenOfDiamonds') ]
          boardCards = [card('fourOfSpades'), card('fiveOfSpades'), card('queenOfSpades'), card('threeOfSpades')]
        });
          
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });
    }); // desc 4 board cards
    
    describe('when given 3 board cards', function() {
      let boardCards: Flop;
      describe('and hand of high card', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfspades') ]
          boardCards = [ card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds') ]
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(HighCard)
        });
        it('should return instance of class HighCard', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(HighCard)
        });
      });

      describe('and hand including pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfspades')]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')  ]
        });
          
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
        it('should return instance of class Pair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect(theBestHand.result).toBeCardClassOf(Pair)
        });
      });

      describe('and hand including two pair', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfspades'), card('threeOfSpades'), card('fourOfClubs')]
          boardCards = [ card('aceOfDiamonds'), card('kingOfClubs'), card('fiveOfDiamonds')] 
        });
          
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(TwoPair)
        });
        it('should return instance of class TwoPair', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(TwoPair)
        });
      });

      describe('and hand including trips', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('queenOfspades'), card('fiveOfDiamonds')]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('aceOfClubs')]
        });
          
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Trips)
        });
        it('should return instance of class Trips', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Trips)
        });
      });

      describe('and hand including straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('fourOfClubs'), card('fiveOfDiamonds')]
          boardCards = [card('queenOfClubs'), card('jackOfspades'), card('tenOfSpades')]
        });
          
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including wheel straight', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('duceOfspades')]
          boardCards = [card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds')]
        });
          
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
        it('should return instance of class Straight', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Straight)
        });
      });

      describe('and hand including flush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('kingOfSpades'), card('queenOfClubs') , card('nineOfDiamonds'),]
          boardCards = [card('threeOfSpades'), card('fiveOfSpades'), card('eightOfSpades')]
        });
          
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Flush)
        });
        it('should return instance of class Flush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Flush)
        });
      });

      describe('and hand including fullhouse', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'),  card('sevenOfDiamonds') , card('eightOfSpades')]
          boardCards = [card('queenOfClubs'), card('aceOfClubs'), card('queenOfspades')]
        });
          
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(FullHouse)
        });
        it('should return instance of class FullHouse', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(FullHouse)
        });
      });

      describe('and hand including quads', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('aceOfDiamonds'), card('sevenOfDiamonds') , card('eightOfSpades')]
          boardCards = [card('threeOfSpades'), card('aceOfClubs'), card('aceOfHearts')]
        });
          
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(Quads)
        });
        it('should return instance of class Quads', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(Quads)
        });
      });

      describe('and hand including straightflush', function() {
        beforeEach(function() {
          playerCards = [ card('aceOfSpades'), card('kingOfSpades'), card('sevenOfDiamonds') , card('eightOfSpades')]
          boardCards = [card('tenOfSpades'), card('queenOfSpades'), card('jackOfSpades') ]
        });
          
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });

      
      describe('and hand including wheel straightflush', function() {
        beforeEach(function() {
          playerCards = [card('aceOfSpades'), card('duceOfSpades') ,card('kingOfSpades'), card('sevenOfDiamonds') ]
          boardCards = [card('fourOfSpades'), card('fiveOfSpades'), card('threeOfSpades')]
        });
          
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards })
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
        it('should return instance of class StraightFlush', function() {
          theBestHand = new TheBestHand({playerCards: playerCards.reverse() as HoleCards, boardCards: boardCards.reverse() as BoardCards})
          expect( theBestHand.result ).toBeCardClassOf(StraightFlush)
        });
      });
    }); // desc 3 board cards
    
  });  // NLHE
    
});