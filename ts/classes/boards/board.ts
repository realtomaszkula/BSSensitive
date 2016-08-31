import { Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardParams } from './../_interfaces'

class Board {
  private _cards;
  private _result;

  constuctor(params: BoardParams){
    if (!params.hasOwnProperty('cards')) throw new Error('params must have cards property')
    if (typeof params !== 'object') throw new Error('params must be an object: { cards }')
    this.cards = params.cards;
  }

  private set cards(cards) {
    
    this._cards = cards;
  }

}