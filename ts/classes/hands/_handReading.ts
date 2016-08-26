import { Card, HandRank, HandParams, Suit, CardValue } from './_interfaces'
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

    isPaired(): boolean {
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

















