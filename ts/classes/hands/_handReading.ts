import { Card, HandRank, HandStrength, HandParams,  Suit, CardValue, Search,
  PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams } from './_interfaces'
import { Pair } from './Pair'
import { TwoPair } from './TwoPair'
import { Trips } from './Trips'
import { Straight } from './Straight'
import { Flush } from './Flush'
import { FullHouse } from './FullHouse'
import { Quads } from './Quads'
import { StraightFlush } from './StraightFlush'

export class HandRankSearch {
  private _handRank: HandRank;
  private _sortedValues: number[];
  private _paired: number[][];
  private _suits: Suit[];

  constructor( private _cards: [Card, Card, Card, Card, Card] ) { 
    this.sortValues();
    this.extractSuits();
    this.pairSort();
    this._handRank = this.figureOutHandRank();
  }

  get result(): HandRank {
    return this._handRank;
  }

  private sortValues(): void {
    this._sortedValues = this._cards.map( card =>  card.value  )
                            .sort()
  }

  private extractSuits(): void {
    this._suits = this._cards.map( card => card.suit )
  }

  private pairSort(): void {
    let repeatedCards: number[];
    
    // collecting repeated cards => [22111]
    repeatedCards = this._sortedValues.filter( (v, i, a) => a[i-1] == a[i] )
    
    // spliting repeated cards in two arrs if more than one repeats [[22][111]]
    let idx = repeatedCards.findIndex( (v, i, a) =>  i > 0 && a[i-1] != a[i] )
    let repeat: number[][] = []
    
    if (idx != -1) { 
      repeat.push( repeatedCards.slice(idx) )  
      repeat.push( repeatedCards.slice(0, idx) )
    } else {
      repeat.push( repeatedCards )
    }
    
    // if full house I want to have trips in first arr [[111][22]]
    repeat.sort( (a, b) => {
      if (a.length > b.length) return -1;
      if (a.length < b.length) return 1;
      return 0;
    })

    this._paired = repeat;
    
  }

  // pair, trips, quads ex. [[111]]
  private get isUniqueSingleRep(): boolean {
    return this._paired.length === 1
  }

  // two pair or full house ex. [ [111], [22] ]
  private get isUniqueDoubleRep(): boolean {
    return this._paired.length === 2
  }

  private searchRanks =  {
    isFlush: (): Search =>  {
      let result = this._suits.find( (_e, i, a) => {
        if ( i > 0 ) {
          return a[i-1] !== a[i]
        }
        })

      let isFlush =  !result;
      return { found: isFlush }
    },
    isStraight: (): Search => {
      let result = this._sortedValues.find( (_e, i, a) => {
        if (i > 0) {
          return a[i-1] + 1 != a[i]
        } else {
          return false
        }
      })
      let isStraight =  !result;
      return { found: isStraight }
    },

    isQuads: (): Search => {
      let isQuads: boolean = this.isUniqueSingleRep && this._paired[0].length === 3
      return { found: isQuads }
    },

    isTrips: (): Search => {
      let isTrips: boolean = this.isUniqueSingleRep && this._paired[0].length === 2
      return { found: isTrips }
    },

    isPair: (): Search => {
      let isPair: boolean = this.isUniqueSingleRep && this._paired[0].length === 1
      return { found: isPair }
    },

    isFullHouse: (): Search => {
    // if full house I want to have trips in first arr [[111][22]]
      this._paired.sort( (a: number[], b: number[]) => {
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
        return 0;
      })

      let isFullHouse: boolean = this.isUniqueDoubleRep && this._paired[0].length === 2 && this._paired[1] && this._paired[1].length === 1
      return { found: isFullHouse }
    },

    isTwoPair: (): Search => {
      // want to have higher pair first
      this._paired.sort( (a: number[], b: number[] ) => {
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0;
      })

      let isTwoPair: boolean = this.isUniqueDoubleRep && this._paired[0].length === 1 && this._paired[1] &&  this._paired[1].length === 1
      return { found: isTwoPair }
    }
}

  private classBuilder =  {
    StraighFlush(params: StraightFlushParams): StraightFlush {
      return new StraightFlush(params)
    },
    Quads: (): Quads => {
      let params: QuadsParams = {
        cards: this._cards,
        handStrength: HandStrength.quads,
        params: {
          quads: this._paired[0][0]
        }
      }
      return new Quads(params)
    },
    FullHouse: (): FullHouse => {
      let params: FullHouseParams = {
        cards: this._cards,
        handStrength: HandStrength.fullHouse,
        params: {
          trips: this._paired[0][0],
          pair: this._paired[1][0]
        }
      }
      return new FullHouse(params)
    },
    Flush: (): Flush => {
      let params: FlushParams = {
          cards: this._cards,
          handStrength: HandStrength.flush,
          params: {
            highestCard: this._cards[4].value
          }
      }
      return new Flush(params)
    },
    Straight: (): Straight => {
      let params: StraightParams = {
        cards: this._cards,
        handStrength: HandStrength.straight,
        params: {
          highestCard: this._cards[4].value
        }
      }

      return new Straight(params)
    },
    Trips: (): Trips => {
      let params: TripsParams = {
        cards: this._cards,
        handStrength: HandStrength.trips,
        params: {
          trips: this._paired[0][0]
        }
      }
      return new Trips(params)
    },
    TwoPair: (): TwoPair =>  {
       let params: TwoPairParams = {
          cards: this._cards,
          handStrength: HandStrength.twoPair,
          params: {
            lowerPair: this._paired[1][0],
            higherPair: this._paired[0][0]
          }
       } 
      return new TwoPair(params)
    },
    Pair: (): Pair => {
      let params: PairParams = {
        cards: this._cards,
        handStrength: HandStrength.pair,
        params: {
          pair: this._paired[0][0]
        }
      }
      return new Pair(params)
    }
  }

  private figureOutHandRank() {
    let classNames = ["Quads", "FullHouse", "Flush", "Straight", "Trips", "TwoPair", "Pair"]
    for (let className of classNames) {
      let found =  this.searchRanks['is' + className]().found
      if( found ) return this.classBuilder[className]()
    }
  }
}






















