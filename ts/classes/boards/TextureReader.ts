import { TypeCheck, Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet } from './../_interfaces'
import { Board } from './Board'


export abstract class TextureReader {
  protected _result: Board;
  protected _boardObject: BoardByStreet;
  protected _cards: BoardCards;
  protected _typeCheck: TypeCheck;
  protected _suits: Suit[];
  protected _values: CardValue[];
  
  abstract setSuits(): void;
  abstract setValues(): void;
  abstract setTypeCheck(): TypeCheck;

  constructor(params: TextureReaderParams){
    this.checkParams(params);
    this.initialize(params);
    this.setSuits();
    this.setValues();
    this.createBoard();
  }

  protected checkParams(params: TextureReaderParams): void {
    //... some logic to check params
  }
  
  protected initialize(params: TextureReaderParams): void {
    this._typeCheck = this.setTypeCheck();
    this._boardObject = params.boardObject
  }


  get cards(): BoardCards {
    return this._cards;
  }

  get boardObject(): BoardByStreet {
    return this._boardObject;
  }

  get result(): Board {
    return this._result;
  }

  protected get suits(): Suit[] {
    return this._suits
  }

  protected get values(): CardValue[] {
    return this._values;
  }
  protected createBoard() {
    let boardTextures = this.setBoardTypes();
    let cards = this.cards;

    let board = new Board({
      cards: cards,
      boardTextures: boardTextures
    })

    this._result = board;
  }

  protected createBoardTextureObject(types: string[]): BoardTextures {
    let result = {} as BoardTextures;
    for(let type in types){
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
