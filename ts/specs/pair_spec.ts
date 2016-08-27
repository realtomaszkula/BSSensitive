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
import { card } from './helpers/methods'

describe('Pair', function() {

  describe('when creating an instance of Pair', function() {
  let hand: Pair;
    beforeEach(function() {
      let params: PairParams = {
        cards : [ card('aceOfSpades'), card('aceOfCslub'), card('kingOfclubs'), card('queenOfClubs'), card('jackOfClubs')],
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
        cards: [ card('kingOfDiamonds'), card('kingOfClubs'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfSpades') ],
        handStrength: HandStrength.pair,
        pair: CardValue.king
      }
      let anotherParams: PairParams = {
        cards: [ card('aceOfClubs'), card('aceOfSpades'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfSpades') ],
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