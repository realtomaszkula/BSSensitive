import { HandRankSearch } from './../../classes/hands/_handReading'
import { HighCard } from './../../classes/hands/HighCard'
import { Pair } from './../../classes/hands/Pair'
import { TwoPair } from './../../classes/hands/TwoPair'
import { Trips } from './../../classes/hands/Trips'
import { Straight } from './../../classes/hands/Straight'
import { FullHouse } from './../../classes/hands/FullHouse'
import { Flush } from './../../classes/hands/Flush'
import { Quads } from './../../classes/hands/Quads'
import { StraightFlush } from './../../classes/hands/StraightFlush'
import { Card, CardClass, HandParams,  Suit, CardValue } from './../../classes/hands/_interfaces'
import { card } from './../helpers/methods'

describe('HandRankSearch', function() {
let hand: HandRankSearch;
let params: [Card, Card, Card, Card];
  
  describe('when given hand with high card', function() {
    beforeEach(function() {
      params = [card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfClubs'), card('duceOfClubs')]
    });
    it('instance should return instance of class Pair', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof HighCard ).toBe(true)
    });
    it('instance should return instance of class Pair', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof HighCard ).toBe(true)
    });
  });

  describe('when given hand including pair', function() {
    beforeEach(function() {
      params = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('queenOfClubs'), card('duceOfClubs')]
    });
    it('instance should return instance of class Pair', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof Pair ).toBe(true)
    });
    it('instance should return instance of class Pair', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof Pair ).toBe(true)
    });
  });

  describe('when given hand including two pair', function() {
    beforeEach(function() {
      params = [card('aceOfSpades'), card('aceOfDiamonds'), card('kingOfClubs'), card('kingOfHearts'), card('duceOfClubs')]
    });
    it('instance should return instance of class two pair', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof TwoPair ).toBe(true)
    });
    it('instance should return instance of class two pair', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof TwoPair ).toBe(true)
    });
  });

  describe('when given hand including trips', function() {
    beforeEach(function() {
      params = [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('kingOfHearts'), card('duceOfClubs')]
    });
    it('instance should return instance of class trips', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof Trips ).toBe(true)
    });
    it('instance should return instance of class trips', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof Trips ).toBe(true)
    });
  });

  describe('when given hand including straight', function() {
    beforeEach(function() {
      params = [ card('aceOfSpades'), card('kingOfDiamonds'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfClubs')]
    });
    it('instance should return instance of class straight', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof Straight ).toBe(true)
    });
    it('instance should return instance of class straight', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof Straight ).toBe(true)
    });
  });

  describe('when given hand including wheel straight', function() {
    beforeEach(function() {
      params = [ card('aceOfSpades'), card('duceOfDiamonds'), card('threeOfClubs'), card('fourOfClubs'), card('fiveOfClubs')]
    });
    it('instance should return instance of class straight', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof Straight ).toBe(true)
    });
    it('instance should return instance of class straight', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof Straight ).toBe(true)
    });
  });

  describe('when given hand including flush', function() {
    beforeEach(function() {
      params = [ card('aceOfClubs'), card('kingOfClubs'), card('queenOfClubs'), card('jackOfClubs'), card('duceOfClubs')] 
    });
    it('instance should return instance of class flush', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof Flush ).toBe(true)
    });
    it('instance should return instance of class flush', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof Flush ).toBe(true)
    });
  });

  describe('when given hand including fullhouse', function() {
    beforeEach(function() {
      params = [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('kingOfHearts'), card('kingOfClubs')]
    });
    it('instance should return instance of class fullhouse', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof FullHouse ).toBe(true)
    });
    it('instance should return instance of class fullhouse', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof FullHouse ).toBe(true)
    });
  });

  describe('when given hand including quads', function() {
    beforeEach(function() {
      params = [card('aceOfSpades'), card('aceOfDiamonds'), card('aceOfClubs'), card('aceOfHearts'), card('duceOfClubs')]
    });
    it('instance should return instance of class quads', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof Quads ).toBe(true)
    });
    it('instance should return instance of class quads', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof Quads ).toBe(true)
    });
  });

  describe('when given hand including straightflush', function() {
    beforeEach(function() {
      params = [ card('aceOfClubs'), card('kingOfClubs'), card('queenOfClubs'), card('jackOfClubs'), card('tenOfClubs')]
    });
    it('instance should return instance of class straightflush', function() {
      hand = new HandRankSearch(params)
      expect(hand.result instanceof StraightFlush ).toBe(true)
    });
    it('instance should return instance of class straightflush', function() {
      hand = new HandRankSearch(params.reverse())
      expect(hand.result instanceof StraightFlush ).toBe(true)
    });
  });

});
