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
  SearchesOnceAndRemembers } from './../classes/hands/_interfaces'


describe('Hand', function() {

  let pairParams: PairParams = {
    cards: [ card('kingOfDiamonds'), card('kingOfClubs'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfSpades') ],
    handStrength: HandStrength.pair,
    pair: CardValue.king
  }

 let firstPair = new Pair(pairParams)

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



    
});
  