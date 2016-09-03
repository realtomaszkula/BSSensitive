import { CardClass, HandStrength, HandParams,  Suit, CardValue, 
  Search, PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams,
  SearchesOnceAndRemembers, CardParams } from './../../classes/_interfaces'
import { Pair } from './../../classes/hands/Pair'
import { castSuit } from './../../typecasting/arrays'
import { step, stepPairDefault } from './../interfaces/main'
import { Card } from './../../classes/hands/Card'

function card(name: string): Card {
  if (!name.includes('Of')) throw new Error('card name must include Of');
  let [value , suit] = name.split('Of')
  value = CardValue[value];
  suit = suit.toLowerCase().slice(0,-1)  // i want to use camel case and use plural form for suits ex: aceOfSpades becomes 'ace' 'spade'
  return new Card( { suit: suit, value: +value} as CardParams)
}

function cardValue(name: string): number {
  if (!name.includes('Of')) throw new Error('card name must include Of');
  let [value , suit] = name.split('Of')
  return CardValue[value];
}

function getPair(defaultParams: stepPairDefault, first: step, second: step) {
  let firstParams: PairParams = Object.assign({}, defaultParams, first)
  let secondParams: PairParams = Object.assign({}, defaultParams, second)
  return { firstPair: new Pair(firstParams), secondPair: new Pair(secondParams)}
}

function getTwoPair() {

}

export { card, getPair, getTwoPair, cardValue }
