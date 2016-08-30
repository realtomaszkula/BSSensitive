import { Card, CardClass, HandParams, HandStrength,  Suit, CardValue } from './_interfaces'

export class Hand {
  protected _handStrength: HandStrength;
  protected _cards: Card[]
  protected _values: CardValue[]
  protected _kickers: CardValue[]


  constructor( params: HandParams ){
    this.checkParams(params);
    this.cards = params.cards;
    this.handStrength = params.handStrength;
  }

  private checkParams(params: HandParams) {
    if (typeof params !== 'object') throw new Error('Params must be an object: { cards: Card[], handStrength: -1..14 }')
    if(!params.hasOwnProperty('cards')) throw new Error('Params must have property of cards')
    if(!params.hasOwnProperty('handStrength')) throw new Error('Params must have property of handStrength')
  }

  protected set cards(cards: Card[]) {
    if (cards.length !== 5){
      throw new Error('params.cards[] must have the length of 5')
    }
    for (let i = 0; i < cards.length; i++) {
      if (typeof cards[i] !== 'object') throw new Error(`params.cards[${i}] must be an object: { value: 0..14, suit: spade | club | diamond | heart }`)
      if (!(cards[i].value)) throw new Error(`params.cards[${i}] must have property of value`)
      if (!(cards[i].suit)) throw new Error(`params.cards[${i}] must have property of suit`)
    }
    this._cards = cards;
  }

  set handStrength(handStrength: HandStrength) {
    if (handStrength < -1 || handStrength > 14) 
      throw new Error('hand strength must be between -1 and 14')
    this._handStrength = handStrength
  }

  get handStrength () {
    return this._handStrength;  
  }

  get kickers(): CardValue[] {
    return this._kickers;
  }

  protected setValues() {
    this._values = this._cards.map( card => card.value )
  }

  private sortKickers(): void {
    this._kickers = this._kickers.sort( (a, b) => b - a)
  }

  protected setKickers(...excluded: CardValue[]): void {
    // kickers is anything thats not relevant for given hand,
    // so pair will pass pair, two pair will pass both pairs etc.
    // this function collects the remaining values
    this.setValues()

    // if value match any of forbiden elems, filter it out
    this._kickers = this._values.filter( v => !excluded.some( n => v === n ) )
    this.sortKickers();
  }

  protected checkKickers(other: CardClass) {
    let otherKickers = other.kickers;
    let thisKickers = this._kickers;
    for( let kicker in thisKickers) {
      let r = this.compare(thisKickers[kicker],otherKickers[kicker])
      if ( r == 1 || r == -1 ) return r;
    }
   return 0;
  }

  protected compare(thisKicker: CardValue, otherKicker: CardValue): number {
    if (thisKicker > otherKicker) return 1;
    if (thisKicker < otherKicker) return -1
    return 0;
  }

  compareToSibiling(other: CardClass): number {
    if (this._handStrength > other.handStrength) return 1;
    if (this._handStrength < other.handStrength) return -1;
    return 0;
  }

  resolveConflict(other: CardClass): number{
    if( 1 ) {
      throw new Error('child class must implement resolveConflict method')
    } 
    return 42;
  };

  compareTo(other: CardClass): number {
    if (this.constructor.name === other.constructor.name) {
      return this.resolveConflict(other);
    } else {
      return this.compareToSibiling(other)
    }
  }
}

