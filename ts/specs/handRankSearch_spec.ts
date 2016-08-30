import { HandRankSearch } from './../classes/hands/_handReading'
import { HighCard } from './../classes/hands/HighCard'
import { Pair } from './../classes/hands/Pair'
import { TwoPair } from './../classes/hands/TwoPair'
import { Trips } from './../classes/hands/Trips'
import { Straight } from './../classes/hands/Straight'
import { FullHouse } from './../classes/hands/FullHouse'
import { Flush } from './../classes/hands/Flush'
import { Quads } from './../classes/hands/Quads'
import { StraightFlush } from './../classes/hands/StraightFlush'
import { Card, CardClass, HandParams,  Suit, CardValue } from './../classes/hands/_interfaces'
import { card } from './helpers/methods'

describe('HandRankSearch', function() {
  
  describe('when given hand with high card', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      let params: Card[] = [card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfClubs'), card('duceOfClubs')]
      hand = new HandRankSearch(params)
    });
      
    it('instance should return instance of class Pair', function() {
      expect(hand.result instanceof HighCard ).toBe(true)
    });
  });

  describe('when given hand including pair', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      let params: Card[] = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfClubs'), card('duceOfClubs')]
      hand = new HandRankSearch(params)
    });
      
    it('instance should return instance of class Pair', function() {
      expect(hand.result instanceof Pair ).toBe(true)
    });
  });

  describe('when given hand including two pair', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      let params: Card[] = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('kingOfHearts'), card('duceOfClubs')]
      hand = new HandRankSearch(params)
    });
      
    it('instance should return instance of class two pair', function() {
      expect(hand.result instanceof TwoPair ).toBe(true)
    });
  });

  describe('when given hand including trips', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      let params: Card[] = [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('kingOfHearts'), card('duceOfClubs')]
      hand = new HandRankSearch(params)
    });
      
    it('instance should return instance of class trips', function() {
      expect(hand.result instanceof Trips ).toBe(true)
    });
  });

  describe('when given hand including straight', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      let params: Card[] = [ card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfClubs')]
      hand = new HandRankSearch(params)
    });
      
    it('instance should return instance of class straight', function() {
      expect(hand.result instanceof Straight ).toBe(true)
    });
  });

  describe('when given hand including wheel straight', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      let params: Card[] = [ card('aceOfSpades'), card('duceOfDiamonds'), card('threeOfClubs'), card('fourOfClubs'), card('fiveOfClubs')]
      hand = new HandRankSearch(params)
    });
      
    it('instance should return instance of class straight', function() {
      expect(hand.result instanceof Straight ).toBe(true)
    });
  });

  describe('when given hand including flush', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      let params: Card[] = [ card('aceOfClubs'), card('kingOfClubs'), card('queenOfClubs'), card('jackOfClubs'), card('duceOfClubs')]
      hand = new HandRankSearch(params) 
    });
      
    it('instance should return instance of class flush', function() {
      expect(hand.result instanceof Flush ).toBe(true)
    });
  });

  describe('when given hand including fullhouse', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      let params: Card[] = [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('kingOfHearts'), card('kingOfClubs')]
      hand = new HandRankSearch(params)
    });
      
    it('instance should return instance of class fullhouse', function() {
      expect(hand.result instanceof FullHouse ).toBe(true)
    });
  });

  describe('when given hand including quads', function() {
  let hand: HandRankSearch;
  let params: Card[] = [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('aceOfHearts'), card('duceOfClubs')]
    beforeEach(function() {
      hand = new HandRankSearch(params )
    });
      
    it('instance should return instance of class quads', function() {
      expect(hand.result instanceof Quads ).toBe(true)
    });
  });

  describe('when given hand including straightflush', function() {
  let hand: HandRankSearch;
    beforeEach(function() {
      let params: Card[] = [ card('aceOfClubs'), card('kingOfClubs'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfClubs')]
      hand = new HandRankSearch(params)
    });
      
    it('instance should return instance of class straightflush', function() {
      expect(hand.result instanceof StraightFlush ).toBe(true)
    });
  });

    
});