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
  let aceOfSpades: Card =  { suit: "spade", value: CardValue.ace  };
  let aceOfClubs: Card  =  { suit: "club", value: CardValue.ace  };
  let kingOfClubs: Card  = { suit: "club", value: CardValue.king  }; 
  let queenOfClubs: Card  = { suit: "club", value: CardValue.queen  };
  let jackOfClubs: Card  = { suit: "club", value: CardValue.jack  };

  let kingOfSpades: Card = { suit: 'spade', value: CardValue.king }
  let kingOfDiamonds: Card = { suit: 'diamond', value: CardValue.king }
  let tenOfSpades: Card  = { suit: "spade", value: CardValue.ten  };
  let nineOfSpades: Card  = { suit: "spade", value: CardValue.nine  };
  let eightOfSpades: Card  = { suit: "spade", value: CardValue.eight  };
  
  describe('when creating an instance of Pair', function() {
  let hand: Pair;
    beforeEach(function() {
      let params: PairParams = {
        cards : [ aceOfSpades, aceOfClubs, kingOfClubs, queenOfClubs, jackOfClubs],
        handStrength: HandStrength.pair,
        pair: CardValue.ace 
      }
      hand = new Pair( params )
    });
      
    it('should set the pair correctly', function() {
      expect(hand.pair).toEqual(CardValue.ace)
    });
  });

  
  describe('when comparing to another pair', function() {
  let firstPair: Pair;
  let secondPair: Pair;
    beforeEach(function() {
      let params: PairParams = {
        cards: [ kingOfDiamonds, kingOfClubs, queenOfClubs, jackOfClubs, tenOfSpades ],
        handStrength: HandStrength.pair,
        pair: CardValue.king
      }
      let anotherParams: PairParams = {
        cards: [ aceOfClubs, aceOfSpades, queenOfClubs, jackOfClubs, tenOfSpades ],
        handStrength: HandStrength.pair,
        pair: CardValue.ace
      }

      firstPair = new Pair(params)
      secondPair = new Pair(anotherParams)
    });
      
    it('should recognize bigger pair', function() {
      expect(firstPair.resolveConflict(secondPair)).toEqual(-1)
    });
    it('should recognize lower pair', function() {
      expect(secondPair.resolveConflict(firstPair)).toEqual(1)
    });

      
  });
    

});