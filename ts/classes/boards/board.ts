import { Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardType,  BoardParams } from './../_interfaces'

class Board {
  private _cards: BoardCards;
  private _result: BoardType;

  constuctor(params: BoardParams){
    this.checkParams(params);
    this.initializeCards(params.cards);
    this.initializeResult();
  }

  private checkParams(params: BoardParams): void {
    if (typeof params !== 'object') throw new Error('params must be an object: { cards }');
    if (!params.hasOwnProperty('cards')) throw new Error('params must have cards property');
    if ([3, 4, 5].some( l => l === params.cards.length)) throw new Error('incorrect number of cards in params, allowed: 3, 4, 5');
  }

  get cards(){
    return this._cards;
  }

  get result() {
    return this._result;
  }

  private initializeCards(cards: BoardCards) {
    this._cards = cards;
  }

  private initializeResult() {
    this._result = this.setBoardTypes();
  }

  private typeCheck = {
    isMonotone: (): boolean => {
      return false
    },

    isPaired: (): boolean =>  {
      return false
    }
  }

  private createResultObject(types: string[]): BoardType {
    let result = {} as BoardType;
    for(let type in types){
      result[type] = true;
    }
    return result;
  }

  private setBoardTypes(): BoardType {
    let allowedTypes = ['Paired', 'Monotone'];
    let actualTypes = allowedTypes.filter( type => {
      let r = this.typeCheck['is' + type]()
      if (typeof r !== 'boolean') throw new Error('tried to check for non existent board type')
      return r
    })
    return this.createResultObject(actualTypes)
  }




}