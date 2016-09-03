import { PokerStarsParserParams } from './../_interfaces'
import { Player } from './../Player/Player'

export class HandParser {
  constructor() {
  }

  protected firstMatchingGroup(regExp: RegExp, str: string): string[] {
    if (!(regExp.flags.includes('g'))) {
      console.log('Adding global flag')
      let source = regExp.source;
      regExp = new RegExp(source, 'g');
    }
    let results = [], result;
    while(result = regExp.exec(str)) {
      results.push(result[1])
    }
    return results;
  }

  protected getMatchesFromArray(regExp: RegExp, arr: string[]): string[] {
    let result = [];
    for(let str of arr) {
      let match = str.match(regExp);
      if (match) result.push(match[0])
    }
    return result;
  }

}
