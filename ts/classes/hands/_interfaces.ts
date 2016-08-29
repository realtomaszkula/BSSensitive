import { Pair } from './Pair'
import { TwoPair } from './TwoPair'
import { Trips } from './Trips'
import { Straight } from './Straight'
import { Flush } from './Flush'
import { FullHouse } from './FullHouse'
import { Quads } from './Quads'
import { StraightFlush } from './StraightFlush'
import { HighCard } from './HighCard'

type Suit = 's' | 'c' | 'd' | 'h' | 'spade' | 'club' | 'diamond' | 'heart' | 'S' | 'C' | 'D' | 'H'
type CardClass = Pair | TwoPair | Trips | Straight | Flush | FullHouse | Quads | StraightFlush | HighCard

enum HandStrength {
  highCard,
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
  duce = 2,
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
  cards: Card[],
  handStrength: HandStrength,
}

interface PairParams extends HandParams {
  pair: CardValue
}
interface TwoPairParams extends HandParams {
  lowerPair: CardValue,
  higherPair: CardValue
}
interface TripsParams extends HandParams {
  trips: CardValue
}
interface StraightParams extends HandParams {
}
interface FlushParams extends HandParams {
}
interface FullHouseParams extends HandParams {
  trips: CardValue,
  pair: CardValue
}
interface QuadsParams extends HandParams {
  quads: CardValue
}
interface StraightFlushParams extends HandParams {
}
interface HighCardParams extends HandParams {
}

type SearchesOnceAndRemembers = () => Search;

interface HandClass {
  resolveConflict(other: CardClass ): number
  setKickers(): void
}

export { HandClass, Card, CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams, HighCardParams
  , SearchesOnceAndRemembers }