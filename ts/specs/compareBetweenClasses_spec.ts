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

import { Card, CardClass, HandStrength, HandParams,  Suit, CardValue, Search,
  PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams,
  HighCardParams } from './../classes/hands/_interfaces'


describe('Hand', function() {

let pairParams: PairParams = {
  cards: [ card('kingOfDiamonds'), card('kingOfClubs'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfSpades') ],
  handStrength: HandStrength.pair,
  pair: CardValue.king
}

let pair = new Pair(pairParams)

let twoPairParams: TwoPairParams = {
  cards : [ card('aceOfSpades'), card('aceOfClubs'), card('kingOfclubs'), card('kingOfDiamonds'), card('jackOfClubs')],
  handStrength: HandStrength.twoPair,
  lowerPair: CardValue.king,
  higherPair: CardValue.ace
}
let twoPair = new TwoPair( twoPairParams )

let tripsParams: TripsParams = {
  cards: [ card('aceOfClubs'), card('aceOfDiamonds'), card('aceOfSpades'), card('threeOfClubs'), card('duceOfClubs')],
  handStrength: HandStrength.trips,
  trips: CardValue.ace
}

let trips = new Trips(tripsParams)

let straightParams: StraightParams = {
  cards: [ card('aceOfSpades'), card('kingOfClubs'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfHearts')],
  handStrength: HandStrength.straight,
}
let straight = new Straight(straightParams)

let flushParams: FlushParams = {
  cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfSpades')],
  handStrength: HandStrength.flush
}

let flush = new Flush(flushParams)


let fullHouseParams: FullHouseParams = {
  cards: [ card('aceOfSpades'), card('aceOfHearts'), card('aceOfDiamonds'), card('kingOfSpades'), card('kingOfClubs')],
  handStrength: HandStrength.fullHouse,
  trips: CardValue.ace,
  pair: CardValue.king
}
let fullHouse = new FullHouse(fullHouseParams)

let quadsParams: QuadsParams = {
  cards: [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('aceOfHearts'), card('kingOfClubs')],
  handStrength: HandStrength.quads,
  quads: CardValue.ace
}
let quads = new Quads(quadsParams)

let straightFlushParams: StraightFlushParams = {
  cards: [ card('aceOfSpades'), card('kingOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades')],
  handStrength: HandStrength.straightFlush,
}
let straightFlush = new StraightFlush(straightFlushParams)

let highCardParams: HighCardParams = {
  cards: [ card('aceOfSpades'), card('queenOfSpades'), card('jackOfSpades'), card('tenOfSpades'), card('nineOfClubs')],
  handStrength: HandStrength.highCard
}

let highCard = new HighCard(highCardParams)


  describe('when comparing pair to other classes', function() {
    
    it('should return 0 when comparing to itself', function() {
      expect(pair.compareToSibiling(pair)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(pair.compareToSibiling(trips)).toEqual(-1)
      expect(pair.compareToSibiling(straight)).toEqual(-1)
      expect(pair.compareToSibiling(flush)).toEqual(-1)
      expect(pair.compareToSibiling(fullHouse)).toEqual(-1)
      expect(pair.compareToSibiling(quads)).toEqual(-1)
      expect(pair.compareToSibiling(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(pair.compareToSibiling(highCard)).toEqual(1)
    });

  describe('when comparing two pair to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(twoPair.compareToSibiling(twoPair)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(twoPair.compareToSibiling(trips)).toEqual(-1)
      expect(twoPair.compareToSibiling(straight)).toEqual(-1)
      expect(twoPair.compareToSibiling(flush)).toEqual(-1)
      expect(twoPair.compareToSibiling(fullHouse)).toEqual(-1)
      expect(twoPair.compareToSibiling(quads)).toEqual(-1)
      expect(twoPair.compareToSibiling(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(twoPair.compareToSibiling(pair)).toEqual(1)
      expect(twoPair.compareToSibiling(highCard)).toEqual(1)
    });
  });

  describe('when comparing trips to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(trips.compareToSibiling(trips)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(trips.compareToSibiling(straight)).toEqual(-1)
      expect(trips.compareToSibiling(flush)).toEqual(-1)
      expect(trips.compareToSibiling(fullHouse)).toEqual(-1)
      expect(trips.compareToSibiling(quads)).toEqual(-1)
      expect(trips.compareToSibiling(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(trips.compareToSibiling(twoPair)).toEqual(1)
      expect(trips.compareToSibiling(pair)).toEqual(1)
      expect(trips.compareToSibiling(highCard)).toEqual(1)
    });
  });
  describe('when comparing straight to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(straight.compareToSibiling(straight)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(straight.compareToSibiling(flush)).toEqual(-1)
      expect(straight.compareToSibiling(fullHouse)).toEqual(-1)
      expect(straight.compareToSibiling(quads)).toEqual(-1)
      expect(straight.compareToSibiling(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(straight.compareToSibiling(trips)).toEqual(1)
      expect(straight.compareToSibiling(twoPair)).toEqual(1)
      expect(straight.compareToSibiling(pair)).toEqual(1)
      expect(straight.compareToSibiling(highCard)).toEqual(1)
    });
  });


  describe('when comparing flush to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(flush.compareToSibiling(flush)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(flush.compareToSibiling(fullHouse)).toEqual(-1)
      expect(flush.compareToSibiling(quads)).toEqual(-1)
      expect(flush.compareToSibiling(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(flush.compareToSibiling(straight)).toEqual(1)
      expect(flush.compareToSibiling(trips)).toEqual(1)
      expect(flush.compareToSibiling(twoPair)).toEqual(1)
      expect(flush.compareToSibiling(pair)).toEqual(1)
      expect(flush.compareToSibiling(highCard)).toEqual(1)
    });
  });


  describe('when comparing fullHouse to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(fullHouse.compareToSibiling(fullHouse)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(fullHouse.compareToSibiling(quads)).toEqual(-1)
      expect(fullHouse.compareToSibiling(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(fullHouse.compareToSibiling(flush)).toEqual(1)
      expect(fullHouse.compareToSibiling(straight)).toEqual(1)
      expect(fullHouse.compareToSibiling(trips)).toEqual(1)
      expect(fullHouse.compareToSibiling(twoPair)).toEqual(1)
      expect(fullHouse.compareToSibiling(pair)).toEqual(1)
      expect(fullHouse.compareToSibiling(highCard)).toEqual(1)
    });
  });

  describe('when comparing quads to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(quads.compareToSibiling(quads)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(quads.compareToSibiling(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(quads.compareToSibiling(fullHouse)).toEqual(1)
      expect(quads.compareToSibiling(flush)).toEqual(1)
      expect(quads.compareToSibiling(straight)).toEqual(1)
      expect(quads.compareToSibiling(trips)).toEqual(1)
      expect(quads.compareToSibiling(twoPair)).toEqual(1)
      expect(quads.compareToSibiling(pair)).toEqual(1)
      expect(quads.compareToSibiling(highCard)).toEqual(1)
    });
  });

  describe('when comparing quads to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(straightFlush.compareToSibiling(straightFlush)).toEqual(0)
    })
    
    it('should return 1 for every class lower then itself', function() {
      expect(straightFlush.compareToSibiling(quads)).toEqual(1)
      expect(straightFlush.compareToSibiling(fullHouse)).toEqual(1)
      expect(straightFlush.compareToSibiling(flush)).toEqual(1)
      expect(straightFlush.compareToSibiling(straight)).toEqual(1)
      expect(straightFlush.compareToSibiling(trips)).toEqual(1)
      expect(straightFlush.compareToSibiling(twoPair)).toEqual(1)
      expect(straightFlush.compareToSibiling(pair)).toEqual(1)
      expect(straightFlush.compareToSibiling(highCard)).toEqual(1)
    });
  });
  

    
});
  