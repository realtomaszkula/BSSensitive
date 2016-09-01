import { TypeCheck, Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet } from './../_interfaces'
import { TextureReader } from './TextureReader'

export class TextureReaderFlop extends TextureReader {

  private _firstGap: number;
  private _secondGap: number;
  private _numOfBroadways: number;
  private _numOfSuitRepetition: number;

  constructor(params: TextureReaderParams) {
    super(params)
    this.setGaps();
    this.setNumOfBroadways();
  }

  checkParams() {
    // ...
  }

  setCards() {
    this._cards = [...this._boardObject.flop] as [Card, Card, Card]
  }

  private setGaps(): void {
    let [first, second, third] = this.values;
    this._firstGap = first - second - 1;
    this._secondGap = second - third - 1;
  }
  private setNumOfBroadways(): void {
    this._numOfBroadways = this.values.filter(v => v >= 10).length
  }
  private setNumOfSuitRepetition(): void {
    let firstSuit = this.suits[0];
    let filtered = this.suits.filter(s => s === firstSuit);
    this._numOfSuitRepetition = filtered.length;
  }

  setTypeCheck(): TypeCheck {
    return {
      isMonotone: () => {
        return this._numOfSuitRepetition === 0;
      },
      isTwoTone: () => {
        return this._numOfSuitRepetition === 1;
      },
      isRainbow: () => {
        return this._numOfSuitRepetition === 2;
      },   
      isPaired: () =>  {
        let firstValue = this.values[0];
        let filtered = this.values.filter(v => v === firstValue)
        let isPaired = filtered.length === 1;
        return isPaired;
      },
      isOneStraight: () =>  {
        // T96, T76, T86 ... and special cases QJT, A23, AKQ
        let isQJT = this.cards[0].value === 12 && this.cards[1].value === 11 && this.cards[2].value === 10
        let isA23 = this.cards[0].value === 14 && this.cards[1].value === 2 && this.cards[2].value === 3
        let isAKQ = this.cards[0].value === 14 && this.cards[1].value === 13 && this.cards[2].value === 12
        return (this._firstGap === 0 && this._secondGap === 2) || (this._firstGap === 2 && this._secondGap === 0) || 
                (this._firstGap === 1 && this._secondGap === 1) || isQJT || isA23 || isAKQ
      },
      isTwoStraight: () => {
        // T97, T87 
        return (this._firstGap === 1 && this._secondGap === 0) || (this._firstGap === 0 && this._secondGap === 1)
      },
      isThreeStraight: () => {
        // 456, 678, 789
        return this._firstGap === 0 && this._secondGap === 0
      },
      isSingleBroadway: () => {
        return this._numOfBroadways === 1
      },
      isDoubleBroadWay: () => {
        return this._numOfBroadways === 2
      },
      isTrippleBroadWay: () => {
        return this._numOfBroadways === 3
      },
    }
  }
}