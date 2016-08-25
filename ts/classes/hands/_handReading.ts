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
  private _sortedValues: CardValue[];

  constructor( private _cards: Card[] ) { 
    this._handRank = this.figureOutHandRank();
  }

  get result(): HandRank {
    return this._handRank;
  }

  private sortValues() {
    this._sortedValues = this._cards.map( card =>  card.value  ).sort()
  }

  private searchRanks =  {
    isStraighFlush(): boolean {
      return true
    },

    isQuads(): boolean {
      return true
    },
    isFullHouse(): boolean {
      return true
    },
    isFlush(): boolean {
      return true
    },
    isStraight(): boolean {
      return true
    },
    isTrips(): boolean {
      return true
    },
    isTwoPair(): boolean {
      return true
    },
    isPair(): boolean {
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
    let classes = ['Pair', 'TwoPair', 'Trips', 'Straight', 'Flush', 'FullHouse', 'Quads', 'StraightFlush']
    for (let className of classes) {
      let { found, params } =  this.searchRanks['is' + [className]]
      if( found ) return this.classBuilder[className](params)
    }
  }




}

















