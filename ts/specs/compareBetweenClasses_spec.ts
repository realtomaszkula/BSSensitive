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
      expect(pair.compareTo(pair)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(pair.compareTo(trips)).toEqual(-1)
      expect(pair.compareTo(straight)).toEqual(-1)
      expect(pair.compareTo(flush)).toEqual(-1)
      expect(pair.compareTo(fullHouse)).toEqual(-1)
      expect(pair.compareTo(quads)).toEqual(-1)
      expect(pair.compareTo(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(pair.compareTo(highCard)).toEqual(1)
    });
  });
  describe('when comparing two pair to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(twoPair.compareTo(twoPair)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(twoPair.compareTo(trips)).toEqual(-1)
      expect(twoPair.compareTo(straight)).toEqual(-1)
      expect(twoPair.compareTo(flush)).toEqual(-1)
      expect(twoPair.compareTo(fullHouse)).toEqual(-1)
      expect(twoPair.compareTo(quads)).toEqual(-1)
      expect(twoPair.compareTo(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(twoPair.compareTo(pair)).toEqual(1)
      expect(twoPair.compareTo(highCard)).toEqual(1)
    });
  });

  describe('when comparing trips to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(trips.compareTo(trips)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(trips.compareTo(straight)).toEqual(-1)
      expect(trips.compareTo(flush)).toEqual(-1)
      expect(trips.compareTo(fullHouse)).toEqual(-1)
      expect(trips.compareTo(quads)).toEqual(-1)
      expect(trips.compareTo(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(trips.compareTo(twoPair)).toEqual(1)
      expect(trips.compareTo(pair)).toEqual(1)
      expect(trips.compareTo(highCard)).toEqual(1)
    });
  });
  describe('when comparing straight to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(straight.compareTo(straight)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(straight.compareTo(flush)).toEqual(-1)
      expect(straight.compareTo(fullHouse)).toEqual(-1)
      expect(straight.compareTo(quads)).toEqual(-1)
      expect(straight.compareTo(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(straight.compareTo(trips)).toEqual(1)
      expect(straight.compareTo(twoPair)).toEqual(1)
      expect(straight.compareTo(pair)).toEqual(1)
      expect(straight.compareTo(highCard)).toEqual(1)
    });
  });


  describe('when comparing flush to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(flush.compareTo(flush)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(flush.compareTo(fullHouse)).toEqual(-1)
      expect(flush.compareTo(quads)).toEqual(-1)
      expect(flush.compareTo(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(flush.compareTo(straight)).toEqual(1)
      expect(flush.compareTo(trips)).toEqual(1)
      expect(flush.compareTo(twoPair)).toEqual(1)
      expect(flush.compareTo(pair)).toEqual(1)
      expect(flush.compareTo(highCard)).toEqual(1)
    });
  });


  describe('when comparing fullHouse to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(fullHouse.compareTo(fullHouse)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(fullHouse.compareTo(quads)).toEqual(-1)
      expect(fullHouse.compareTo(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(fullHouse.compareTo(flush)).toEqual(1)
      expect(fullHouse.compareTo(straight)).toEqual(1)
      expect(fullHouse.compareTo(trips)).toEqual(1)
      expect(fullHouse.compareTo(twoPair)).toEqual(1)
      expect(fullHouse.compareTo(pair)).toEqual(1)
      expect(fullHouse.compareTo(highCard)).toEqual(1)
    });
  });

  describe('when comparing quads to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(quads.compareTo(quads)).toEqual(0)
    })
    
    it('should return -1 for every class higher then itself', function() {
      expect(quads.compareTo(straightFlush)).toEqual(-1)
    });

    it('should return 1 for every class lower then itself', function() {
      expect(quads.compareTo(fullHouse)).toEqual(1)
      expect(quads.compareTo(flush)).toEqual(1)
      expect(quads.compareTo(straight)).toEqual(1)
      expect(quads.compareTo(trips)).toEqual(1)
      expect(quads.compareTo(twoPair)).toEqual(1)
      expect(quads.compareTo(pair)).toEqual(1)
      expect(quads.compareTo(highCard)).toEqual(1)
    });
  });

  describe('when comparing quads to other classes', function() {

    it('should return 0 when comparing to itself', function() {
      expect(straightFlush.compareTo(straightFlush)).toEqual(0)
    })
    
    it('should return 1 for every class lower then itself', function() {
      expect(straightFlush.compareTo(quads)).toEqual(1)
      expect(straightFlush.compareTo(fullHouse)).toEqual(1)
      expect(straightFlush.compareTo(flush)).toEqual(1)
      expect(straightFlush.compareTo(straight)).toEqual(1)
      expect(straightFlush.compareTo(trips)).toEqual(1)
      expect(straightFlush.compareTo(twoPair)).toEqual(1)
      expect(straightFlush.compareTo(pair)).toEqual(1)
      expect(straightFlush.compareTo(highCard)).toEqual(1)
    });
  });
  

    
});
  