import { HandParser } from './HandHistoryParser'
import { Player } from './../Player/Player'
import { Position, PlayerParams } from './../_interfaces'


interface SeatsParserParams {
  hh: {
    meta: string[],
    seats: string[]
  }
}

export class SeatsParser extends HandParser{
  private _hh: { meta: string[], seats: string[] };
  private _regExp: { buttonSeat: RegExp, playerNicks: RegExp, playerStack: RegExp};
  private _players: Player[];
  private _buttonSeat: number;
  
  constructor(params: SeatsParserParams) {
    super();
    this._hh.meta = params.hh.meta;
    this._hh.seats = params.hh.seats;
    this._players = [];
    this._regExp = {
      buttonSeat:  /Seat #(\d) is the button/,
      playerNicks:  /(^.+?)(?=\(\$\d+)/,
      playerStack: /\(\$([\d|\.]+) in chips\)$/gm,
    }
   }

  get players(): Player[] {
    return this._players;
  }

  private get hh() {
    return this._hh;
  }

  private get regExp() {
    return this._regExp;
  }


  private findButtonSeatNumber():string {
    let result = super.firstMatchingGroup(this.regExp.buttonSeat, this.hh.meta.join('\n'));
    return result[1]
  }

  private findButtonSeatIndex(btnSeatNumber: string): number {
    return this.hh.seats.findIndex( str => str.includes(`Seat ${btnSeatNumber}`))
  }

  private getPlayerSeatsStrings (btnIndex: number): string[] {
    // rearanging seats so the seats array starts with the button position
    let firstHalf = this.hh.seats.slice(0, btnIndex)
    let secondHalf = this.hh.seats.slice(btnIndex)
    let rearangedSeats = [ ...secondHalf, ...firstHalf ]

    // remove 'Seat x: '
   return rearangedSeats.map( s => s = s.slice(8) )
  }

  private getPossiblePositions(numOfPlayers): Position[] {
   if (numOfPlayers > 2) {
    return ['BTN', 'SB' , 'BB' , 'UTG' ,'MP' , 'CO'].slice(0, numOfPlayers) as Position[]
   }  else {
    return  ['BTN' , 'BB']
   }
  }

  private createPlayers(names: string[], stacks: number[], positions: Position[]) {
    for(let i = 0; i < names.length; i++) {
      let params: PlayerParams = {
        name: names.shift().trim(),
        stacksize: stacks.shift(), 
        position: positions.shift() 
      }
      this._players.push( new Player(params) )
    }
  }


  private setPlayers () {
    let btnSeat: string = this.findButtonSeatNumber();
    let btnIndex = this.findButtonSeatIndex(btnSeat);
    let playerSeatsStrings = this.getPlayerSeatsStrings(btnIndex)

    let playerNames: string[] = super.getMatchesFromArray(this.regExp.playerNicks, playerSeatsStrings);
    let playerStacks: number[] = super.getMatchesFromArray(this.regExp.playerStack, playerSeatsStrings)
                                       .map( e => Number.parseFloat(e))
    let possiblePositions: Position[] = this.getPossiblePositions(playerNames.length)

    this.createPlayers(playerNames, playerStacks, possiblePositions)
  }

}