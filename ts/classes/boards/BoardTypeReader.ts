import { Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  BoardTypeReaderParams, BoardParams } from './../_interfaces'

export class BoardTypeReader {
  private _cards: BoardCards;
  private _result: BoardTextures;

  constructor(params: BoardTypeReaderParams){
    this.checkParams(params);
    this.initializeCards(params.cards);
    this.initializeResult();
  }

  private checkParams(params: BoardTypeReaderParams): void {
    if (typeof params !== 'object') throw new Error('params must be an object: { cards }');
    if (!params.hasOwnProperty('cards')) throw new Error('params must have cards property');
    if (!([3, 4, 5].some( l => l === params.cards.length))) throw new Error('incorrect number of cards in params, allowed: 3, 4, 5');
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

  private createResultObject(types: string[]): BoardTextures {
    let result = {} as BoardTextures;
    for(let type in types){
      result[type] = true;
    }
    return result;
  }

  private setBoardTypes(): BoardTextures {
    let allowedTypes = ['Paired', 'Monotone'];
    let actualTypes = allowedTypes.filter( type => {
      let r = this.typeCheck['is' + type]()
      if (typeof r !== 'boolean') throw new Error('tried to check for non existent board type')
      return r
    })
    return this.createResultObject(actualTypes)
  }




}
