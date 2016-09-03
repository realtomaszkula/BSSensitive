import { PokerStarsParserParams } from './../_interfaces'
import { Player } from './../Player/Player'

export class HandParser {
  constructor() {
  }

  protected firstMatchingGroup(rgx, str): string[] {
    // add check for global flag
    let results = [], result;
    while(result = rgx.exec(str)) {
      results.push(result[1])
    }
    return results;
  }

  protected getMatchesFromArray(regExp: RegExp, arr: string[]): string[] {
    let result = [];
    for(let str of arr) {
      let match = str.match(regExp);
      if (match) result.push(match)
    }
    return result;
  }

}
