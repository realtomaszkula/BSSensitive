import { Pair } from './Pair'
import { TwoPair } from './TwoPair'
import { Trips } from './Trips'
import { Straight } from './Straight'
import { Flush } from './Flush'
import { FullHouse } from './FullHouse'
import { Quads } from './Quads'
import { StraightFlush } from './StraightFlush'

type Suit = 'spade' | 'club' | 'diamond' | 'hearts'
type HandRank = Pair | TwoPair | Trips | Straight | Flush | FullHouse | Quads | StraightFlush

enum HandStrength {
  nopair,
  pair,
  twoPair,
  trips,
  straight,
  flush,
  fullHouse,
  quads,
  straightFlush
}

enum CardValue {
  duce = 1,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  jack,
  queen, 
  king,
  ace
}

interface Card {
  value: CardValue,
  suit: Suit
}

interface HandParams {
  params: {
    cards: Card[], 
    rank: HandRank
  }
}

interface CardClassParams {
  found: boolean,
}

interface PairParams extends CardClassParams {
  params?: {
    className: 'Pair',
    pair: HandRank
  }
}
interface TwoPairParams extends CardClassParams {
  params?: {
    className: 'TwoPair',
    lowerPair: HandRank,
    higherPair: HandRank
  }
}
interface TripsParams extends CardClassParams {
  params?: {
    className: 'Trips',
    trips: HandRank
  }
}
interface StraightParams extends CardClassParams {
  params?: {
    className: 'Straight',
    highestCard: HandRank
  }
}
interface FlushParams extends CardClassParams {
  params?: {
    className: 'Flush',
    highestCard: HandRank
  }
}
interface FullHouseParams extends CardClassParams {
  params?: {
    className: 'FullHouse',
    trips: HandRank,
    pair: HandRank
  }
}
interface QuadsParams extends CardClassParams {
  params?: {
    className: 'Quads',
    quads: HandRank
  }
}
interface StraightFlushParams extends CardClassParams {
  params?: {
    className: 'StraightFlush',
    highestCard: HandRank
  }
}



export { Card, HandRank, HandStrength, HandParams,  Suit, CardValue, CardClassParams,
  PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams }