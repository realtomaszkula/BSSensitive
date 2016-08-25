import { Card, HandRank, HandParams, Suit, CardValue } from './_interfaces'
import { Pair } from './Pair'
import { TwoPair } from './TwoPair'
import { Trips } from './Trips'
import { Straight } from './Straight'
import { Flush } from './Flush'
import { Quads } from './Quads'
import { StraightFlush } from './StraightFlush'

export class HandRankSearch {
  private _handRank: HandRank;
  private _sortedValues: CardValue[];

  constructor( private _cards: Card[] ) { 
    this.figureOutHandRank();
  }

  get result(): HandRank {
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

















