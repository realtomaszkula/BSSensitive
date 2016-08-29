import { Card, HandStrength, CardClass, HoldemHoleCards, OmahaHoleCards, HoleCards, HandCards, Flop, FlopTurn, FlopTurnRiver, BoardCards, TheBestHandParams } from './../hands/_interfaces'
import { HandRankSearch } from './../hands/_handReading'


// finds the best hand out of given card combination
export class TheBestHand {
  private _uniqHands: Card[][];
  private _result: CardClass;

  private _cards: HandCards;
  private _playerCards: HoleCards;
  private _boardCards: BoardCards;
  private _gameType: 'Holdem' | 'Omaha';

  constructor(params: TheBestHandParams) {
    this.playerCards = params.playerCards;
    this.boardCards = params.boardCards;

    this.setGameType();
    this.findUniqHands();
    this.findTheBestHand();
  }

  private set playerCards(cards: HoleCards) {
    if (!(cards.length === 4 || cards.length === 2))
      throw new Error('Player hand must have 2 or 4 cards');
    this._playerCards = cards;
  }

  private set boardCards(cards: BoardCards) {   
    if (cards.length > 5 || cards.length < 3 )
      throw new Error('Board cards must have between 3 and 5 cards')
    this._boardCards = cards;
  }

  get result() {
    return this._result;
  }

  private setGameType() {
    this._gameType = (this._playerCards.length === 2) ? 'Holdem' : 'Omaha';
  }

  private findUniqHands() {
    if (this._gameType === 'Holdem') this.findUniqHoldemHands()
    if (this._gameType === 'Omaha') this.findUniqOmahaHands();
  }

  private findTheBestHand() {
    let hightestHandStr = -1;
    for(let hand of this._uniqHands) {
      let result = new HandRankSearch(hand).result;
      if (result.handStrength > hightestHandStr) {
        this._result = result;
        hightestHandStr = result.handStrength;
      }
      
    }
  }

  private findUniqOmahaHands() {

  }

  private findUniqHoldemHands() {
    let arr = [...this._boardCards, ...this._playerCards];
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