
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
  private _handRank: Pair | TwoPair | Trips | Straight | Flush | FullHouse | Quads | StraightFlush;
  private _sortedValues: CardValue[];

  constructor( private _cards: Card[] ) { 
    this.figureOutHandRank();
  }

  get handRank(): Pair | TwoPair | Trips | Straight | Flush | FullHouse | Quads | StraightFlush {
    return this._handRank;
  }

  private sortValues() {
    this._sortedValues = this._cards.map( card =>  card.value  ).sort()
  }

  private figureOutHandRank() {
    this.sortValues();

  }

  private isStraighFlush(): boolean {
    return true
  }

  private isQuads(): boolean {
    return true
  }
  private isFullHouse(): boolean {
    return true
  }
  private isFlush(): boolean {
    return true
  }
  private isStraight(): boolean {
    return true
  }
  private isTrips(): boolean {
    return true
  }
  private isTwoPair(): boolean {
    return true
  }
  private isPair(): boolean {
    return true
  }


}

interface HandParams {
   cards: Card[], 
   rank: HandRank
}

class Hand {
  private _rank: HandRank;
  private _cards: [Card, Card, Card, Card, Card] 

  constructor( params:HandParams ){
    this._rank = params.rank
  }

  get rank () {
    return this._rank;  
  }

  protected compare(first:Card, second:Card): number {
    if (first.value > second.value) {
      return 1
    } else if ( second.value > first.value) {
      return -1
    } else {
      return 0
    }
  }
}

class Pair extends Hand{

  private _pair: [Card, Card]
  private _kickers: [Card, Card, Card]

  constructor( params:HandParams ) {
    super(params)
  }

  get pair(): Card {
    return this._pair[0];
  }

  get kickers(): [Card, Card, Card] {
    return this._kickers;
  }


  private checkKickers(other:Pair) {
    let hisKickers =  other.kickers
    let myKickers = this.kickers

    let result: number;
    for( let kicker in myKickers) {
      let r = this.compare(myKickers[kicker], hisKickers[kicker])
      if ( r == 1 || r == -1 ) return r;
    }

   return result;
  }

  resolveConflict(other:Pair): number {
    if (this.pair.value === other.pair.value) { 
      return this.checkKickers(other)   
    } 

    (this.pair.value > other.pair.value) ? 1 : 0
  }  
}

class TwoPair extends Hand{

  private _higherPair: [Card, Card]
  private _lowerPair: [Card, Card]
  private _kicker: Card

  constructor( params:HandParams ) {
    super(params)
  }

  get higherPair(): Card {
    return this._higherPair[0]
  }

  get lowerPair(): Card {
    return this._lowerPair[0]
  }

  get kicker(): Card {
    return this._kicker
  }

  private checkKickers(other: TwoPair) {
    return this.compare(this.kicker, other.kicker)
  }

  private checkLowerPair(other: TwoPair) {
    if (this.lowerPair.value === other.lowerPair.value) { 
      return this.checkKickers(other)   
    } 

    (this.lowerPair.value > other.lowerPair.value) ? 1 : 0
  }

  resolveConflict(other: TwoPair): number {
    if (this.higherPair.value === other.higherPair.value) { 
      return this.checkLowerPair(other)   
    } 

    (this.higherPair.value > other.higherPair.value) ? 1 : 0
  }  
  }
}

class Trips extends Hand{

  private _trips: [Card, Card, Card]
  private _kickers: [Card, Card]

  constructor( params:HandParams ) {
    super(params)
  }
}

class Straight extends Hand{

  private _highestCard: Card

  constructor( params:HandParams ) {
    super(params)
  }
}

class Flush extends Hand{

  private _highToLow: [Card, Card, Card, Card, Card]
  private _suit: Suit

  constructor( params:HandParams ) {
    super(params)
  }
}

class FullHouse extends Hand{

  private _trips: [Card, Card, Card]
  private _pair: [Card, Card]

  constructor( params:HandParams ) {
    super(params)
  }
}

class Quads extends Hand{

  private _quads: [Card, Card, Card, Card]
  private _kicker: Card

  constructor( params:HandParams ) {
    super(params)
  }
}

class StraightFlush extends Hand{

  private _highestCard: Card
  private _suit: Suit

  constructor( params:HandParams ) {
    super(params)
  }
}

