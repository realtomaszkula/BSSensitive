import { Card, HandRank, HandParams, Suit, CardValue, CardClassParams } from './_interfaces'
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

  constructor( private _cards: Card[] ) { 
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
    isFlush(): CardClassParams {
      let result = this._suits.find( (_e, i, a) => {
        if ( i > 0 ) {
          return a[i-1] !== a[i]
        }
        })

      let isFlush =  !result;

      if(isFlush) {
        return {
          found: true,
          params: {
            className: 'Flush',
            highestCard: this._cards[4]
          }
        }
      } else {
        return {
          found: false
        }
      }
    },
    isStraight(): CardClassParams {
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
          params: {
            className: 'Straight',
            highestCard: this._cards[4]
          }
        }
      } else {
        return {
          found: false
        }
      }
    },

    isQuads(): CardClassParams {
      let isQuads: boolean = this.isUniqueSingleRep && this._paired[0].length === 3
      if (isQuads) {
        return {
          found: true,
          params: {
            className: 'Quads',
            quads: this._paired[0][0]
          }
        }
      } else {
        return { found: false }
      }
    },

    isTrips(): CardClassParams {
      let isTrips: boolean = this.isUniqueSingleRep && this._paired[0].length === 2
      if (isTrips) {
        return {
          found: true,
          params: {
            className: 'Trips',
            trips: this._paired[0][0]
          }
        }
      } else {
        return { found: false }
      }
    },

    isPair(): CardClassParams {
      let isPair: boolean = this.isUniqueSingleRep && this._paired[0].length === 1
      if (isPair) {
        return {
          found: true,
          params: {
            className: 'Pair',
            pair: this._paired[0][0]
          }
        }
      } else {
        return { found: false }
      }
    }

}

  private classBuilder =  {
    StraighFlush(params): StraightFlush {
      return new StraightFlush()
    },
    Quads(params): Quads {
      return new Quads()
    },
    FullHouse(params): FullHouse {
      return new FullHouse()
    },
    Flush(params): Flush {
      return new Flush()
    },
    Straight(params): Straight {
      return new Straight()
    },
    Trips(params): Trips {
      return new Trips()
    },
    TwoPair(params): TwoPair {
      return new TwoPair()
    },
    Pair(params): Pair {
      return new Pair()
    }
  }

  private figureOutHandRank() {
      let {params, className } =  this.searchRanks()
      return this.classBuilder[className](params)
    }
  }




}

















