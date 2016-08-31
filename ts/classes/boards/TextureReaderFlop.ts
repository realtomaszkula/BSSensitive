import { TypeCheck, Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet } from './../_interfaces'
import { TextureReader } from './TextureReader'

class TextureReaderFlop extends TextureReader {
  private _suit: [Suit, Suit, Suit];
  private _value: [CardValue, CardValue, CardValue]

  setSuits() {

  }

  setValues() {
  }

  setTypeCheck(): TypeCheck {
    return {
      isMonotone: (): boolean => {
        let [first, second, third] = this.suits;
        return (first === second === third);
      },
      isTwoTone: (): boolean => {
        let firstSuit = this.suits[0];
        let filtered = this.suits.filter(s => s === firstSuit);
        let isTwoTone: boolean = filtered.length === 1;
        return isTwoTone;
      },
      isRainbow: (): boolean => {
        let firstSuit = this.suits[0];
        let filtered = this.suits.filter(s => s === firstSuit);
        let isRainbow: boolean = filtered.length === 2;
        return isRainbow;
      },   
      isPaired: (): boolean =>  {
        let firstValue = this.values[0];
        let filtered = this.values.filter(v => v === firstValue)
        let isPaired = filtered.length === 1;
        return isPaired;
      },
      isOneStraight: () => false,
      isTwoStraight: () => false,
      isThreeStraight: () => false,
      isDoublePaired: () => false,
      isSingleBroadway: () => false,
      isDoubleBroadWay: () => false,
      isTrippleBroadWay: () => false,
    }
  }
}