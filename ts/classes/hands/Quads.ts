

class Quads extends Hand {

  private _quads: [Card, Card, Card, Card]
  private _kicker: Card

  constructor( params:HandParams ) {
    super(params)
  }

  get quads(): Card {
    return this._quads[0]
  }

  resolveConflict(other: Quads): number {
    return this.compare( { my: this.quads, other: other.quads } )
  }
}
