import { Flop, FlopTurn, FlopTurnRiver, BoardCards, BoardTextures,  BoardParams } from './../_interfaces'
import { ParamsGuard, ParamsGuardParams } from './../mixins/paramsGuard'
import { applyMixins } from './../mixins/_apply'

export class Board implements ParamsGuard{
  checkParams: (params: ParamsGuardParams) => any;

  private _boardTextures: BoardTextures;
  constructor(params: BoardParams) {
    this.checkParams({ actualParams: params, expectedKeys: ['cards', 'boardTextures']});
    this.initializeBoardTextures(params.boardTextures);
    this.initializeCards(params.cards)
  }

  private initializeCards(cards: BoardCards) {

  }

  private initializeBoardTextures(textures: BoardTextures) {

  }
}

applyMixins(Board, [ParamsGuard])