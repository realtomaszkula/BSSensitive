type Suit = 'spade' | 'club' | 'diamond' | 'hearts'

enum CardValue {
  duce,
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

enum HandRank {
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

interface HandParams {
   cards: Card[], 
   rank: HandRank
}

export { Card, HandRank, HandParams,  Suit, CardValue }