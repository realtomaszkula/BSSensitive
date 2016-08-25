import { HandRankSearch } from './../classes/hands/_handReading'
import { Pair } from './../classes/hands/Pair'
import { TwoPair } from './../classes/hands/TwoPair'
import { Trips } from './../classes/hands/Trips'
import { Straight } from './../classes/hands/Straight'
import { Flush } from './../classes/hands/Flush'
import { Quads } from './../classes/hands/Quads'
import { StraightFlush } from './../classes/hands/StraightFlush'
import { Card, HandRank, HandParams,  Suit, CardValue } from './../classes/hands/_interfaces'

describe('HandRankSearch', function() {
  
  describe('when given hand including pair', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
    let hand = new HandRankSearch(
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
    
});
  