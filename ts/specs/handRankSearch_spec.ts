import { HandRankSearch } from './../classes/hands/_handReading'
import { Pair } from './../classes/hands/Pair'
import { TwoPair } from './../classes/hands/TwoPair'
import { Trips } from './../classes/hands/Trips'
import { Straight } from './../classes/hands/Straight'
import { FullHouse } from './../classes/hands/FullHouse'
import { Flush } from './../classes/hands/Flush'
import { Quads } from './../classes/hands/Quads'
import { StraightFlush } from './../classes/hands/StraightFlush'
import { Card, CardClass, HandParams,  Suit, CardValue } from './../classes/hands/_interfaces'

describe('HandRankSearch', function() {
  
  describe('when given hand including pair', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      hand = new HandRankSearch(
        [ 
          { suit: 'spade', value: CardValue.ace  }, 
          { suit: 'diamond', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.king  }, 
          { suit: 'club', value: CardValue.queen  }, 
          { suit: 'club', value: CardValue.duce  }
        ]
      )
    });
      
    it('instance should return instance of class Pair', function() {
      expect(hand.result instanceof Pair ).toBe(true)
    });
  });

  describe('when given hand including two pair', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      hand = new HandRankSearch(
        [ 
          { suit: 'spade', value: CardValue.ace  }, 
          { suit: 'diamond', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.king  }, 
          { suit: 'club', value: CardValue.king  }, 
          { suit: 'club', value: CardValue.duce  }
        ]
      )
    });
      
    it('instance should return instance of class two pair', function() {
      expect(hand.result instanceof TwoPair ).toBe(true)
    });
  });

  describe('when given hand including trips', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      hand = new HandRankSearch(
        [ 
          { suit: 'spade', value: CardValue.ace  }, 
          { suit: 'diamond', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.king  }, 
          { suit: 'club', value: CardValue.duce  }
        ]
      )
    });
      
    it('instance should return instance of class trips', function() {
      expect(hand.result instanceof Trips ).toBe(true)
    });
  });

  describe('when given hand including straight', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      hand = new HandRankSearch(
        [ 
          { suit: 'spade', value: CardValue.ace  }, 
          { suit: 'diamond', value: CardValue.king  }, 
          { suit: 'club', value: CardValue.queen  }, 
          { suit: 'club', value: CardValue.jack  }, 
          { suit: 'club', value: CardValue.ten  }
        ]
      )
    });
      
    it('instance should return instance of class straight', function() {
      expect(hand.result instanceof Straight ).toBe(true)
    });
  });

  describe('when given hand including wheel straight', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      hand = new HandRankSearch(
        [ 
          { suit: 'spade', value: CardValue.ace  }, 
          { suit: 'diamond', value: CardValue.duce  }, 
          { suit: 'club', value: CardValue.three  }, 
          { suit: 'club', value: CardValue.four  }, 
          { suit: 'club', value: CardValue.five  }
        ]
      )
    });
      
    it('instance should return instance of class straight', function() {
      expect(hand.result instanceof Straight ).toBe(true)
    });
  });

  describe('when given hand including flush', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      hand = new HandRankSearch(
        [ 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.king  }, 
          { suit: 'club', value: CardValue.queen  }, 
          { suit: 'club', value: CardValue.jack  }, 
          { suit: 'club', value: CardValue.duce  }
        ]
      ) 
    });
      
    it('instance should return instance of class flush', function() {
      expect(hand.result instanceof Flush ).toBe(true)
    });
  });

  describe('when given hand including fullhouse', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      hand = new HandRankSearch(
        [ 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.duce  }, 
          { suit: 'club', value: CardValue.duce  }, 
          { suit: 'spade', value: CardValue.duce  }
        ]
      )
    });
      
    it('instance should return instance of class fullhouse', function() {
      expect(hand.result instanceof FullHouse ).toBe(true)
    });
  });

  describe('when given hand including quads', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      hand = new HandRankSearch(
        [ 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'spade', value: CardValue.duce  }
        ]
      )
    });
      
    it('instance should return instance of class quads', function() {
      expect(hand.result instanceof Quads ).toBe(true)
    });
  });

  describe('when given hand including straightflush', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      hand = new HandRankSearch(
        [ 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.king  }, 
          { suit: 'club', value: CardValue.queen  }, 
          { suit: 'club', value: CardValue.jack  }, 
          { suit: 'club', value: CardValue.ten  }
        ]
      )
    });
      
    it('instance should return instance of class straightflush', function() {
      expect(hand.result instanceof StraightFlush ).toBe(true)
    });
  });

    
});