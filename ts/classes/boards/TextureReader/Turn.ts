import {  Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet } from './../../_interfaces'
import { TextureReader } from '\./_TextureReader'

class TextureReaderTurn extends TextureReader {

  checkParams() {
    
  }

  initialize() {
    
  }

  setCards() {
    this._cards = [...this._boardObject.flop, this._boardObject.turn] as [Card, Card, Card, Card]
  }

}