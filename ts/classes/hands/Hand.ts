class Hand {
  private _rank: HandRank;
  private _cards: [Card, Card, Card, Card, Card] 

  constructor( params:HandParams ){
    this._rank = params.rank
  }

  get rank () {
    return this._rank;  
  }

  protected compare(params: { my: Card, other: Card }): number {
    if (params.my.value > params.other.value) {
      return 1
    } else if ( params.other.value > params.my.value) {
      return -1
    } else {
      return 0
    }
  }
}