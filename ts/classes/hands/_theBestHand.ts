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


  private endsOnTheFlop(): boolean {
    return this._boardCards.length === 3;
  }
  private endsOnTheTurn(): boolean {
    return this._boardCards.length === 4;
  }
  private endsOnTheRiver(): boolean {
    return this._boardCards.length === 5;
  }

  private *generateHand(cards: OmahaHoleCards) {
    let one, two;
    [one, two, , ] = cards;
    yield([one, two]);

    [one, , two, ] = cards;
    yield([one, two]);

    [one, , , two] = cards;
    yield([one, two]);

    [, one, two, ] = cards;
    yield([one, two]);

    [, one, , two] = cards;
    yield([one, two]);

    [, , one, two] = cards;
    yield([one, two]);
  }

  private castCards<T>(args: T[]): [T, T, T, T] {
    if (args.length !== 4) {
      throw new Error('generateHand accepts omaha hands only (length 4)')
    }
    return <any> args
  }

  private generateHoldemHandsOutOfOmahaHand() {
    let omahaCards: OmahaHoleCards = this.castCards(this._playerCards)
    let gen = this.generateHand(omahaCards)
    let hands: HoldemHoleCards[] = []; 
    for(let hand of gen) {
      hands.push(hand as HoldemHoleCards)
    }
    return hands;
  }

  private setHightestHandStr(defaultHandStr = -1) {
    let hightestHandStr = defaultHandStr;
    for(let hand of this._uniqHands) {
      let result = new HandRankSearch(hand).result;
      if (result.handStrength > hightestHandStr) {
        this._result = result;
        hightestHandStr = result.handStrength;
      }
    }
  }

  private findTheBestHand() {
    if (this._gameType === 'Holdem') {
      this.setUniqHoldemHands();
    }
    if (this._gameType === 'Omaha') {
      this.setUniqOmahaHands();
    }
    this.setHightestHandStr();
  }

  private usingOneHoleCard(core: Card[], rest: Card[]): Card[][] {
  /*  given [1,2,3,4,5] core and [6, 7] rest will replace each core element with 6 and then with 7 */
    let result: Card[][] = [];
    for (let i = 0; i < core.length; i++ ) {
      for (let replacement of rest) {
        let temp = [...core];
        temp[i] = replacement;
        result.push(temp)
      }
    }
    return result;
  }

  private usingTwoHoleCards(core: Card[], rest: Card[]): Card[][] {
  /*  given [1,2,3,4,5] core and [6, 7] rest will replace eachtwo core element with 6 and 7 */
    let result: Card[][] = [];
    if ( rest.length === 2 ) {
      let coreIdxs = core.map( (v, i) => i )
      for (let i = 0; i < core.length; i++ ) {
        let [first, second] = rest;
        // make sure to not replace element with the same index twice
        let idxs = coreIdxs.filter(( _v, idx) => idx < i )
        for (let idx of idxs) {
          let temp = [...core];
          temp[i] = first;
          temp[idx] = second;
          result.push(temp)
        }
      }
    }
    return result;
  }

private getCoreAndRest(playerCards: Card[]): { core: Card[], rest: Card[] } {
    let arr = [...this._boardCards, ...playerCards];
    return {
      core: arr.slice(0, 5),
      rest: arr.slice(5)
    }
  }

  private setUniqOmahaHands(): void {
    this._uniqHands = [];
    let possibleHoleCards = this.generateHoldemHandsOutOfOmahaHand();
    let core: Card[];
    let rest: Card[];
    // loop runs for every possible holdem hand from omaha hand
    for(let playerCards of possibleHoleCards) {
      if( this.endsOnTheRiver() ) {
        // find all combos by subsituting both hole cards
        let twoHoleCardsSubStitution = this.usingTwoHoleCards(this._boardCards, playerCards);
        this._uniqHands.push(...twoHoleCardsSubStitution)
      }
      if( this.endsOnTheTurn() ) {
        /* add one hole card to board to make 5 card combo, 
        and find all possible combos by substituting with another hole card, 
        do it for both hole cards */

        let [firstCard, secondCard] = playerCards

        // merges first hole card with the board and finds uniq hand combos by substituting with the second hole card
        core = [...this._boardCards, firstCard]
        rest = [secondCard]
        let firstOneHoleCardSubstitution = this.usingOneHoleCard(core, rest)

        // does the same for another hole card
        core = [...this._boardCards, secondCard]
        rest = [firstCard]
        let secondOneHoleCardSubstitution = this.usingOneHoleCard(core, rest)

        // collect results
        this._uniqHands.push( ...firstOneHoleCardSubstitution, ...secondOneHoleCardSubstitution)
      }
      if( this.endsOnTheFlop() ) {
        // add two hole cards to board to make 5 card combo
        this._uniqHands.push([...playerCards, ...this._boardCards])
      }
    }
  }

  private setUniqHoldemHands(): void {
    let { core, rest } = this.getCoreAndRest(this._playerCards);
    let oneHoleCardSubstitution = this.usingOneHoleCard(core, rest)
    let twoHoleCardsSubStitution = this.usingTwoHoleCards(core, rest)
    this._uniqHands =  [...oneHoleCardSubstitution, ...twoHoleCardsSubStitution, core]
  }

}