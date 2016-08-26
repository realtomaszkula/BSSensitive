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

interface Search {
  found: boolean
}

interface HandParams extends Search {
  cards: [Card, Card, Card, Card, Card]
}

interface PairParams extends HandParams {
  params: {
    handStrength: HandStrength,
    className: 'Pair',
    pair: HandRank
  }
}
interface TwoPairParams extends HandParams {
  params: {
    handStrength: HandStrength,
    className: 'TwoPair',
    lowerPair: HandRank,
    higherPair: HandRank
  }
}
interface TripsParams extends HandParams {
  params: {
    handStrength: HandStrength,
    className: 'Trips',
    trips: HandRank
  }
}
interface StraightParams extends HandParams {
  params: {
    handStrength: HandStrength,
    className: 'Straight',
    highestCard: HandRank
  }
}
interface FlushParams extends HandParams {
  params: {
    handStrength: HandStrength,
    className: 'Flush',
    highestCard: HandRank
  }
}
interface FullHouseParams extends HandParams {
  params: {
    handStrength: HandStrength,
    className: 'FullHouse',
    trips: HandRank,
    pair: HandRank
  }
}
interface QuadsParams extends HandParams {
  params: {
    handStrength: HandStrength,
    className: 'Quads',
    quads: HandRank
  }
}
interface StraightFlushParams extends HandParams {
  params: {
    handStrength: HandStrength,
    className: 'StraightFlush',
    highestCard: HandRank
  }
}



export { Card, HandRank, HandStrength, HandParams,  Suit, CardValue, 
  Search, PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams }