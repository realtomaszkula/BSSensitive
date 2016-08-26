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
   cards: Card[], 
   rank: HandRank
}

interface PairParams {
  className: 'Pair',
  pair: HandRank
}
interface TwoPairParams {
  className: 'TwoPair',
  lowerPair: HandRank,
  higherPair: HandRank
}
interface TripsParams {
  className: 'Trips',
  trips: HandRank
}
interface StraightParams {
  className: 'Straight',
  highestCard: HandRank
}
interface FlushParams {
  className: 'Flush',
  highestCard: HandRank
}
interface FullHouseParams {
  className: 'FullHouse',
  trips: HandRank,
  pair: HandRank
}
interface QuadsParams {
  className: 'Quads',
  quads: HandRank
}
interface StraightFlushParams {
  className: 'StraightFlush',
  highestCard: HandRank
}

interface CardClassParams {
  found: boolean,
  params?: PairParams | TwoPairParams | TripsParams | StraightParams | FlushParams | FullHouseParams | QuadsParams | StraightFlushParams
}

export { Card, HandRank, HandStrength, HandParams,  Suit, CardValue, CardClassParams }