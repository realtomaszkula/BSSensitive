import { PlayerParams } from './../_interfaces'

export class Player {
  private _name: string;
  private _stack: number;
  private _position: Position;

  constructor(params: PlayerParams) {
    this._name = params.name;
    this._position = params.position;
    this._stack = params.stacksize
    ;
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