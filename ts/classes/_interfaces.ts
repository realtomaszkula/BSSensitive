import { Pair } from './hands/Pair'
import { TwoPair } from './hands/TwoPair'
import { Trips } from './hands/Trips'
import { Straight } from './hands/Straight'
import { Flush } from './hands/Flush'
import { FullHouse } from './hands/FullHouse'
import { Quads } from './hands/Quads'
import { StraightFlush } from './hands/StraightFlush'
import { HighCard } from './hands/HighCard'
import { Card }  from './hands/Card'
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


type HoldemHoleCards = [Card, Card];
type OmahaHoleCards = [Card, Card, Card, Card];
type HoleCards =  HoldemHoleCards | OmahaHoleCards;
type HandCards = [Card, Card, Card, Card, Card];

type Flop = [Card, Card, Card];
type FlopTurn = [Card, Card, Card, Card];
type FlopTurnRiver = [Card, Card, Card, Card, Card];
type BoardCards = Flop | FlopTurn | FlopTurnRiver;

interface TheBestHandParams {
  playerCards: HoleCards,
  boardCards: BoardCards
}

interface CardParams {
  value: number,
  suit: Suit
}

interface StraightTextures {
  oneStraight: boolean,
  twoStraight: boolean,
  threeStraight: boolean
}

interface SuitTextures {
  monotone: boolean,
  rainbow: boolean,
  twotone: boolean
}

interface BroadwayTextures {
  oneBroadway: boolean,
  twoBroadway: boolean,
  threeBoardway: boolean
}

interface BoardTextures {
  straight: StraightTextures,
  suit: SuitTextures,
  broadway: BroadwayTextures
}

interface BoardByStreet {
  flop?: [Card, Card, Card],
  turn?: Card,
  river?: Card
}

interface TextureReaderParams {
  boardObject: BoardByStreet,
}

interface BoardParams{
  cards: BoardCards, 
  boardTextures?: BoardTextures
}

interface TypeCheck {
  straight: {
    isOneStraight: () => boolean;
    isTwoStraight: () => boolean;
    isThreeStraight: () => boolean;
  },
  suit:  {
    isMonotone: () => boolean;
    isTwoTone: () => boolean;
    isRainbow: () => boolean;
  },
  broadway: {
    isSingleBroadway?: () => boolean;
    isDoubleBroadWay?: () => boolean;
    isTrippleBroadWay?: () => boolean;
  }
  isPaired: () => boolean;
  isDoublePaired?: () => boolean;
}

type Texture =  'Monotone'| 'Twotone'| 'Rainbow'| 'OneStraight'| 'TwoStraight'| 'ThreeStraight'| 'Paired'| 'DoublePaired'| 'SingleBroadway'| 'DoubleBroadway'| 'TrippleBroadway';


export { HandClass, Card, CardClass, HandStrength, HandParams,  Suit, CardValue, Search, 
  PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams, HighCardParams
  , SearchesOnceAndRemembers ,
  HoldemHoleCards, OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams, CardParams, 
  TextureReaderParams, BoardTextures, BoardParams, BoardByStreet, TypeCheck, Texture, StraightTextures, SuitTextures, BroadwayTextures
}