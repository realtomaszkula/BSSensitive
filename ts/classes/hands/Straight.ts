class Straight extends Hand {

  private _highestCard: Card

  constructor( params:HandParams ) {
    super(params)
  }

  get highestCard() {
    return this._highestCard;
  }

  resolveConflice(other: Straight): number {
    return this.compare( {my: this.highestCard, other: other.highestCard} )
  }
}