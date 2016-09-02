import { TypeCheck, Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet } from './../../_interfaces'
import { TextureReader } from './abstract'

class TextureReaderRiver extends TextureReader {

  checkParams(){
  }

  setCards() {
    this._cards = [...this.boardObject.flop, this.boardObject.turn, this._boardObject.river] as [Card, Card, Card, Card, Card]
  }

  setTypeCheck(): TypeCheck {
    return {
      isMonotone: (): boolean => {
        return true
      },
      isTwoTone: (): boolean => {
        return true
      },
      isRainbow: (): boolean => {
        return true
      },   
      isPaired: (): boolean =>  {
        return true
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