import { HandParser } from './HandHistoryParser'
import { Player } from './../Player/Player'
import { Position, PlayerParams } from './../_interfaces'


interface PlayerParserParams {
  hh: {
    meta: string[],
    seats: string[],
    hero: string;
  }
}

export class PlayerParser extends HandParser{
  private _hh: { meta: string[], seats: string[], hero: string };
  private _regExp: { buttonSeat: RegExp, playerNicks: RegExp, playerStack: RegExp, heroName: RegExp};
  private _players: Player[];
  private _buttonSeat: number;
  
  constructor(params: PlayerParserParams) {
    super();
    this._hh = {
      meta: params.hh.meta,
      seats: params.hh.seats,
      hero: params.hh.hero
    }
    this._regExp = {
      buttonSeat:  /Seat #(\d) is the button/g,
      playerNicks:  /(^.+?)(?=\(\$\d+)/,
      playerStack: /\(\$([\d|\.]+) in chips\)$/gm,
      heroName: /Dealt to (.+?(?=[[][2-9|T|J|Q|K|A][s|c|d|h]\s[2-9|T|J|Q|K|A][s|c|d|h]))/,

    }
    this._players = [];
    this.setPlayers();
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
    return result[0]
  }

  private findButtonSeatIndex(btnSeatNumber: string): number {
    return this.hh.seats.findIndex( str => str.includes(`Seat ${btnSeatNumber}`))
  }

  private findHeroName(){

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

  private createPlayers(names: string[], stacks: number[], positions: Position[], heroName: string) {
    let length = names.length;
    for(let i = 0; i < length; i++) {
      let isHero = names[0].trim() === heroName.trim()
      let params: PlayerParams = {
        name: names.shift().trim(),
        stacksize: stacks.shift(), 
        position: positions.shift(), 
        isHero: isHero
      }
      this._players.push( new Player(params) )
    }
  }


  private setPlayers () {
    let btnSeat: string = this.findButtonSeatNumber();
    let btnIndex: number = this.findButtonSeatIndex(btnSeat);
    let playerSeatsStrings: string[] = this.getPlayerSeatsStrings(btnIndex)

    let heroName: string = super.firstMatchingGroup(this.regExp.heroName, this._hh.hero)[0];
    let playerNames: string[] = super.getMatchesFromArray(this.regExp.playerNicks, playerSeatsStrings);
    let playerStacks: number[] = super.firstMatchingGroup(this.regExp.playerStack, playerSeatsStrings.join('\n'))
                                       .map( e => Number.parseFloat(e))
    let possiblePositions: Position[] = this.getPossiblePositions(playerNames.length)

    this.createPlayers(playerNames, playerStacks, possiblePositions, heroName)
  }

}