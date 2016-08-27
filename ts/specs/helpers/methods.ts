import { Card, HandRank, HandStrength, HandParams,  Suit, CardValue, 
  Search, PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams,
  SearchesOnceAndRemembers } from './../../classes/hands/_interfaces'
import { Pair } from './../../classes/hands/Pair'

function card(name: string): Card {
  let [value , suit] = name.split('Of')
  // i want to use camel case and use plural form for suits ex: aceOfSpades becomes 'ace' 'spade'
  return { value: CardValue[value], suit: suit.toLowerCase().slice(0,-1)}
}

function getPair(defaultParams: { pair: CardValue, handStrength: HandStrength }, first: { cards: Card[]  }, second: { cards: Card[]}) {
  let firstParams: PairParams = Object.assign({}, defaultParams, first)
  let secondParams: PairParams = Object.assign({}, defaultParams, second)
  return { firstPair: new Pair(firstParams), secondPair: new Pair(secondParams)}
}

export { card, getPair }
