import { Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet } from './../../_interfaces'
import { TextureReader } from '\./_TextureReader'

export class TextureReaderFlop extends TextureReader {

  private _firstGap: number;
  private _secondGap: number;
  private _numOfBroadways: number;
  private _numOfSuitRepetition: number;

  constructor(params: TextureReaderParams) {
    super(params)
    this.initialize(params);
    this.createBoard();
  }

  initialize(params: TextureReaderParams) {
    this.setCards();
    this.setSuits();
    this.setValues();
  }
  
  setCards() {
    this._cards = [...this._boardObject.flop] as [Card, Card, Card]
  }

  checkParams() {
    // ...
  }

 
}
