import { PlayerParams } from './../_interfaces'

export class Player {
  private _name: string;
  private _stack: number;
  private _position: Position;
  private _isHero: boolean;

  constructor(params: PlayerParams) {
    this._name = params.name;
    this._position = params.position;
    this._isHero = params.isHero;
    this._stack = params.stacksize;
    ;
  }

  get isHero() {
    return this._isHero;
  }

  get stack() {
    return this._stack;
  }

  get position() {
    return this._position
  }

  get name() {
    return this._name
  }
}