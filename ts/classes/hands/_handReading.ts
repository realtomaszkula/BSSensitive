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
    this._handRank = this.figureOutHandRank();
  }

  get result(): HandRank {
    return this._handRank;
  }

  private sortValues(): void {
    this._sortedValues = this._cards.map( card =>  card.value  )
                            .sort()
  }

  private suits(): void {
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
  get isUniqueSingleRep(): boolean {
    return this._paired.length === 2
  }

  // two pair or full house ex. [ [111], [22] ]
  get isUniqueDoubleRep(): boolean {
    return this._paired.length === 1
  }

  private searchRanks =  {
    isFlush(): FlushParams | Search {
      let result = this._suits.find( (_e, i, a) => {
        if ( i > 0 ) {
          return a[i-1] !== a[i]
        }
        })

      let isFlush =  !result;

      if(isFlush) {
        return {
          found: true,
          cards: this._cards,
          params: {
            className: 'Flush',
            handStrength: HandStrength.flush,
            highestCard: this._cards[4]
          }
        }
      } else {
        return {
          found: false
        }
      }
    },
    isStraight(): StraightParams | Search {
      let result = this._sortedValues.find( (_e, i, a) => {
        if (i > 0) {
          return a[i-1] + 1 != a[i]
        } else {
          return false
        }
      })
      let isStraight =  !result;

      if(isStraight) {
        return {
          found: true,
          cards: this._cards,
          params: {
            className: 'Straight',
            handStrength: HandStrength.straight,
            highestCard: this._cards[4]
          }
        }
      } else {
        return {
          found: false
        }
      }
    },

    isQuads(): QuadsParams| Search {
      let isQuads: boolean = this.isUniqueSingleRep && this._paired[0].length === 3
      if (isQuads) {
        return {
          found: true,
          cards: this._cards,
          params: {
            className: 'Quads',
            handStrength: HandStrength.quads,
            quads: this._paired[0][0]
          }
        }
      } else {
        return { found: false }
      }
    },

    isTrips(): TripsParams | Search{
      let isTrips: boolean = this.isUniqueSingleRep && this._paired[0].length === 2
      if (isTrips) {
        return {
          found: true,
          cards: this._cards,
          params: {
            className: 'Trips',
            handStrength: HandStrength.trips,
            trips: this._paired[0][0]
          }
        }
      } else {
        return { found: false }
      }
    },

    isPair(): PairParams | Search {
      let isPair: boolean = this.isUniqueSingleRep && this._paired[0].length === 1
      if (isPair) {
        return {
          found: true,
          cards: this._cards,
          params: {
            className: 'Pair',
            handStrength: HandStrength.pair,
            pair: this._paired[0][0]
          }
        }
      } else {
        return { found: false }
      }
    },

    isFullHouse(): FullHouseParams | Search {
    // if full house I want to have trips in first arr [[111][22]]
      this._paired.sort( (a: number[], b: number[]) => {
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
        return 0;
      })

      let isFullHouse: boolean = this.isUniqueDoubleRep && this._paired[0].length === 2 && this._paired[1].length === 1

      if (isFullHouse) {
        return {
          found: true,
          cards: this._cards,
          params: {
            className: 'FullHouse',
            handStrength: HandStrength.fullHouse,
            trips: this._paired[0][0],
            pair: this._paired[1][0]
          }
        } 
      } else {
        return {
          found: false
        }
      }
    },

    isTwoPair(): TwoPairParams | Search{
      // want to have higher pair first
      this._paired.sort( (a: number[], b: number[] ) => {
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0;
      })

      let isTwoPair: boolean = this.isUniqueDoubleRep && this._paired[0].length === 1 && this._paired[1].length === 1

      if (isTwoPair) {
        return {
          found: true,
          cards: this._cards,
          params: {
            className: 'TwoPair',
            handStrength: HandStrength.twoPair,
            lowerPair: this._paired[1][0],
            higherPair: this._paired[0][0]
          }
        }
      } else {
        return {
          found: false
        }
      }
    }
}

  private classBuilder =  {
    StraighFlush(params: StraightFlushParams): StraightFlush {
      return new StraightFlush(params)
    },
    Quads(params: QuadsParams): Quads {
      return new Quads(params)
    },
    FullHouse(params: FullHouseParams): FullHouse  {
      return new FullHouse(params)
    },
    Flush(params: FlushParams): Flush  {
      return new Flush(params)
    },
    Straight(params: StraightParams): Straight  {
      return new Straight(params)
    },
    Trips(params: TripsParams): Trips  {
      return new Trips(params)
    },
    TwoPair(params: TwoPairParams): TwoPair  {
      return new TwoPair(params)
    },
    Pair(params: PairParams): Pair  {
      return new Pair(params)
    }
  }

  private figureOutHandRank() {
      let {params, className } =  this.searchRanks()
      return this.classBuilder[className](params)
    }
  }




}

















