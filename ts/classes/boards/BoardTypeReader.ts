import { Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  BoardTypeReaderParams, BoardParams, BoardByStreet } from './../_interfaces'
import { Board } from './Board'

export class BoardTypeReader {
  private _result: Board;
  private _boardObject: BoardByStreet;
  private _cards: BoardCards;
  private _suits: [Suit, Suit, Suit];
  private _values: CardValue[];

  constructor(params: BoardTypeReaderParams){
    this.checkParams(params);
    this.initialize(params);
    this.setSuits();
    this.setValues();
    this.createBoard();
  }

  private checkParams(params: BoardTypeReaderParams): void {
    //... some logic to check params
  }
  
  private initialize(params: BoardTypeReaderParams): void {
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

  private get suits(): Suit[] {
    return this._suits
  }

  private get values(): CardValue[] {
    return this._values;
  }

  private setSuits(): void {
    this._suits = this.boardObject.flop.map(card => card.suit);
  }

  private setValues(): void {
    this._values = this.boardObject.flop.map(card => card.value);
  }

  private createBoard() {
    let boardTextures = this.setBoardTypes();
    let cards = this.cards;

    let board = new Board({
      cards: cards,
      boardTextures: boardTextures
    })

    this._result = board;
  }

  private typeCheck = {
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
    isOneStraight: (): boolean => {

    }
  }

  private createBoardTextureObject(types: string[]): BoardTextures {
    let result = {} as BoardTextures;
    for(let type in types){
      result[type] = true;
    }
    return result;
  }

  private setBoardTypes(): BoardTextures {
    let allowedTypes = ['Paired', 'Monotone'];
    let actualTypes = allowedTypes.filter( type => {
      let r = this.typeCheck['is' + type]();
      if (typeof r !== 'boolean') throw new Error('tried to check for non existent board type');
      return r
    })
    return this.createBoardTextureObject(actualTypes)
  }
}
