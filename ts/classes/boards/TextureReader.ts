import { TypeCheck, Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet } from './../_interfaces'
import { Board } from './Board'

export abstract class TextureReader {
  protected _result: Board;
  protected _boardObject: BoardByStreet;
  protected _cards: BoardCards;
  protected _typeCheck: TypeCheck;
  protected _suits: Suit[];
  protected _values: CardValue[];
  
  abstract checkParams(params: TextureReaderParams): void 
  abstract setCards(): void;
  abstract setTypeCheck(): TypeCheck;
  abstract initialize(params: TextureReaderParams): void;

  constructor(params: TextureReaderParams){
    this._boardObject = params.boardObject
    this._typeCheck = this.setTypeCheck();
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
  get boardObject(): BoardByStreet {
    return this._boardObject;
  }
  get result(): Board {
    return this._result;
  }

  protected createBoard() {
    let boardTextures = this.setBoardTypes();
    let board = new Board({
      cards: this.cards,
      boardTextures: boardTextures
    })
    this._result = board;
  }

  protected createBoardTextureObject(types: string[]): BoardTextures {
    let result = {} as BoardTextures;
    for(let type of types){
      result[type] = true;
    }
    return result;
  }

  protected setBoardTypes(): BoardTextures {
    let allowedTypes = ['Paired', 'Monotone'];
    let actualTypes = allowedTypes.filter( type => {
      let r = this._typeCheck['is' + type]();
      if (typeof r !== 'boolean') throw new Error('tried to check for non existent board type');
      return r
    })
    return this.createBoardTextureObject(actualTypes)
  }
}
