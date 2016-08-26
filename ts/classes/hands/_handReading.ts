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

  private searchRanks =  {
    isFlush(): boolean {
      let result = this._suits.find( (_e, i, a) => {
        if ( i > 0 ) {
          return a[i-1] !== a[i]
        }
        })
      return !result;
    },
    isStraight(): boolean {
      let result = this._sortedValues.find( (_e, i, a) => {
        if (i > 0) {
          return a[i-1] + 1 != a[i]
        } else {
          return false
        }
      })
      return !result
    },

    isQuads(): { found: boolean, params?: { quads: number[] }} {
      this._paired.length === 2 && this._paired[0].length === 3
      return true
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

















