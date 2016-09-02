import { Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, 
  BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet, 
  Texture
} from './../../_interfaces'
import { Board } from './../board'
import { CardValueTextureType } from './../TextureTypes/CardValue'
import { PairedTextureType } from './../TextureTypes/Paired'
import { SuitTextureType } from './../TextureTypes/Suit'
import { StraightTextureType } from './../TextureTypes/Straight'

export abstract class TextureReader {
  protected _result: Board;
  protected _boardObject: BoardByStreet;
  protected _cards: BoardCards;
  protected _suits: Suit[];
  protected _values: CardValue[];
  
  abstract checkParams(params: TextureReaderParams): void 
  abstract initialize(params: TextureReaderParams): void;
  abstract setCards(): void;

  constructor(params: TextureReaderParams){
    this._boardObject = params.boardObject
  }

  protected setSuits(): void {
    this._suits = this._cards.map(c => c.suit)
  }
  protected setValues(): void {
    this._values = this._cards.map(c => c.value).sort( (a, b) => b - a)
  }

  protected get cards(): BoardCards {
    return this._cards;
  }
  protected get suits(): Suit[] {
    return this._suits
  }
  protected get values(): CardValue[] {
    return this._values;
  }

  get result(): Board {
    return this._result;
  }

  protected createBoard() {
    let straightType = new StraightTextureType({ values: this.values }).type;
    let suitType = new SuitTextureType({ suits: this.suits }).type;
    let pairedType = new PairedTextureType({ values: this.values }).type;
    let cardValueType = new CardValueTextureType({ values: this.values }).type;

    let boardTextures: BoardTextures = {
      straight: straightType,
      suit: suitType,
      paired: pairedType, 
      cardValue: cardValueType
    }
    
    let board = new Board({
      cards: this.cards,
      boardTextures: boardTextures
    })
    this._result = board;
  }


}