import { PlayerParams } from './../_interfaces'

export class Player {
  private _name: string;
  private _stack: number;
  private _position: Position;

  constructor(params: PlayerParams) {

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