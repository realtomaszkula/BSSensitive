import { TypeCheck, Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet } from './../_interfaces'
import { TextureReader } from './TextureReader'

class TextureReaderTurn extends TextureReader {

  checkParams() {
    
  }

  setCards() {
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