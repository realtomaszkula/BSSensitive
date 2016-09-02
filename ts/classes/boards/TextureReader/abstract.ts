import { TypeCheck, Card, Suit, CardValue, Flop, FlopTurn, FlopTurnRiver, 
  BoardCards, BoardTextures,  TextureReaderParams, BoardParams, BoardByStreet, 
  Texture
} from './../../_interfaces'
import { Board } from './../board'

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
    let boardTextures = this.setBoardTextures();
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

  protected checkTextures(textures: Texture[], group: string): Texture {
    // each texture in a group makes other textures impossible so return as soon as we get true
    for(let texture of textures) {
      let isOfTextureType = this._typeCheck[group]['is' + texture];
      if (isOfTextureType) {
        return texture;
      }
    }
  }

  protected setBoardTextures(): BoardTextures {
    let suitsTextures: Texture[] = ['Monotone', 'Twotone', 'Rainbow'];
    let straightsTextures: Texture[] = ['OneStraight', 'TwoStraight', 'ThreeStraight', 'ZeroStraight'];
    let broadwaysTextures: Texture[] = ['SingleBroadway', 'DoubleBroadway', 'TrippleBroadway', 'ZeroBroadway' ];
    let pairedTextures: Texture[] = ['Paired', 'NotPaired'];

    let boardCharacteristics = [ 
          this.checkTextures(suitsTextures, 'suits'), 
          this.checkTextures(straightsTextures, 'straights'),
          this.checkTextures(broadwaysTextures, 'broadways'),
          this.checkTextures(broadwaysTextures, 'paired')
    ]
   
    return this.createBoardTextureObject(boardCharacteristics)
  }
}