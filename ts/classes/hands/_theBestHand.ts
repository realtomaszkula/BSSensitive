import { Card, HandStrength, CardClass } from './../hands/_interfaces'
import { HandRankSearch } from './../hands/_handReading'


// finds the best hand out of given card combination
export class TheBestHand {
  private _uniqHands: Card[][];
  private _result: CardClass

  constructor(private _cards: Card[]) {
    if (_cards.length > 7 || _cards.length < 5) 
      throw new Error('Cards[] must have length between 5 and 7')
    this.findUniqHands();
    this.findTheBestHand();
  }

  get result() {
    return this._result;
  }

  private findTheBestHand() {
    let hightestHandStr: HandStrength = HandStrength.highCard;
    for(let hand of this._uniqHands) {
      let result = new HandRankSearch(hand).result;
      if (result.handStrength > hightestHandStr) 
        this._result = result
    }
  }

  private findUniqHands() {
    let arr = this._cards;
    // return combination of 5 elements from 5-7 element set
    
    // given [1,2,3,4,5,6,7] splits into core of [1,2,3,4,5] and rest of [6,7]
    let core: Card[] = arr.slice(0, 5)
    let rest: Card[] = arr.slice(5)
    let result: Card[][] = []
    
    for (let i = 0; i < core.length; i++ ) {
      
      /*  given [1,2,3,4,5] core and [6, 7] rest will replace each core element with 6 and then with 7 */
      for (let replacement of rest) {
        let temp = [...core];
        temp[i] = replacement;
        result.push(temp)
      }
      
      /*  given [1,2,3,4,5] core and [6, 7] rest will replace eachtwo core element with 6 and 7 */
      if (rest.length === 2) {
        let [first, second] = rest;
        // make sure to not replace element with the same index twice
        let idxs = [0, 1, 2, 3, 4].filter(( _v, idx) => idx < i )
        // actual replacing
        for (let idx of idxs) {
          let temp = [...core];
          temp[i] = first;
          temp[idx] = second;
          result.push(temp)
        }
      }
    }
    
    // add core to possible combinations
    result.push(core)
    this._uniqHands = result;
  }
}