import { HandRankSearch } from './../classes/hands/_handReading'
import { Pair } from './../classes/hands/Pair'
import { TwoPair } from './../classes/hands/TwoPair'
import { Trips } from './../classes/hands/Trips'
import { Straight } from './../classes/hands/Straight'
import { FullHouse } from './../classes/hands/FullHouse'
import { Flush } from './../classes/hands/Flush'
import { Quads } from './../classes/hands/Quads'
import { StraightFlush } from './../classes/hands/StraightFlush'
import { Card, HandRank, HandStrength, HandParams,  Suit, CardValue, 
  Search, PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams,
  SearchesOnceAndRemembers } from './../classes/hands/_interfaces'

describe('Pair', function() {
  
  describe('when creating an instance of Pair', function() {
  let hand: Pair;
  let aceOfSpades: Card =  { suit: "spade", value: CardValue.ace  };
  let aceOfClubs: Card  =  { suit: "club", value: CardValue.ace  };
  let kingOfClubs: Card  = { suit: "club", value: CardValue.king  }; 
  let queenOfClubs: Card  = { suit: "club", value: CardValue.queen  };
  let jackOfClubs: Card  = { suit: "club", value: CardValue.jack  };
    beforeEach(function() {
      let params: PairParams = {
        cards : [ aceOfSpades, aceOfClubs, kingOfClubs, queenOfClubs, jackOfClubs],
        handStrength: HandStrength.pair,
        params : { pair: CardValue.ace }
      }
      hand = new Pair( params )
    });
      
    it('should set the pair correctly', function() {
      expect(hand.pair).toEqual(CardValue.ace)
    });
    it('should set kickers correctly', function() {
      expect(hand.kickers).toContain(kingOfClubs)
      expect(hand.kickers).toContain(queenOfClubs )
      expect(hand.kickers).toContain(jackOfClubs)
    });
  });

});