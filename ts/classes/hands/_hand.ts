import { Card, CardClass, HandParams, HandStrength,  Suit, CardValue } from './_interfaces'

export class Hand {
  protected _handStrength: HandStrength;
  protected _cards: Card[]
  protected _values: CardValue[]
  protected _kickers: CardValue[]


  constructor( params: HandParams ){
    this._cards = params.cards;
    this._handStrength = params.handStrength;
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

  private resolveConflict(other: CardClass): number{
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

