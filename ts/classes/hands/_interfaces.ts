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

export { Card, HandRank, HandStrength, HandParams,  Suit, CardValue }