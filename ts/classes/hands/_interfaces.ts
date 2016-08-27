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

interface HandParams {
  cards: [Card, Card, Card, Card, Card],
  handStrength: HandStrength,
}

interface PairParams extends HandParams {
  params: {
    pair: HandStrength
  }
}
interface TwoPairParams extends HandParams {
  params: {
    lowerPair: HandStrength,
    higherPair: HandStrength
  }
}
interface TripsParams extends HandParams {
  params: {
    trips: HandStrength
  }
}
interface StraightParams extends HandParams {
  params: {
    highestCard: CardValue
  }
}
interface FlushParams extends HandParams {
  params: {
    highestCard: CardValue
  }
}
interface FullHouseParams extends HandParams {
  params: {
    trips: HandStrength,
    pair: HandStrength
  }
}
interface QuadsParams extends HandParams {
  params: {
    quads: HandStrength
  }
}
interface StraightFlushParams extends HandParams {
  params: {
    highestCard: CardValue
  }
}

type SearchesOnceAndRemembers = () => Search;

export { Card, HandRank, HandStrength, HandParams,  Suit, CardValue, 
  Search, PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams,
  SearchesOnceAndRemembers }