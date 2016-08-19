
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


class HandRankSearch {
  private _handRank: HandRank;
  private _sortedValues: CardValue[];

  sta

  constructor( private _cards: Card[] ) { 
    this.sortValues();
    this.figureOutHandRank();
  }

  private sortValues() {
    this._sortedValues = this._cards.map( card =>  card.value  ).sort()
  }

  private figureOutHandRank() {
    this.checkForStraight()
  }


  private checkForStraight() {
    this._handRank = HandRank.straight
  }



}

class Hand {
  constructor( private _cards: Card[] ){}
}

class Pair extends Hand{

  private _pair: [Card, Card]
  private _kickers: [Card, Card, Card]

  constructor(_cards: Card[]) {
    super(_cards)
  }  
}

class TwoPair extends Hand{

  private _higherPair: [Card, Card]
  private _lowerPair: [Card, Card]
  private _kicker: Card

  constructor( _cards: Card[]) {
    super(_cards)
  }
}

class Trips extends Hand{
  private _trips: [Card, Card, Card]
  private _kickers: [Card, Card]

  constructor( _cards: Card[]) {
    super(_cards)
  }
}

class Straight extends Hand{
  private _highestCard: Card

  constructor( _cards: Card[]) {
    super(_cards)
  }
}

class Flush extends Hand{
  private _highToLow: [Card, Card, Card, Card, Card]
  private _suit: Suit

  constructor( _cards: Card[]) {
    super(_cards)
  }
}

class FullHouse extends Hand{
  private _trips: [Card, Card, Card]
  private _pair: [Card, Card]

  constructor( _cards: Card[]) {
    super(_cards)
  }
}

class Quads extends Hand{
  private _quads: [Card, Card, Card, Card]
  private _kicker: Card

  constructor( _cards: Card[]) {
    super(_cards)
  }
}

class StraightFlush extends Hand{
  private _highestCard: Card
  private _suit: Suit

  constructor( _cards: Card[]) {
    super(_cards)
  }
}

