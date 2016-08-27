import { Card, HandRank, HandStrength, HandParams,  Suit, CardValue, 
  Search, PairParams, TwoPairParams, TripsParams, StraightParams, FlushParams, FullHouseParams, QuadsParams, StraightFlushParams,
  SearchesOnceAndRemembers } from './../../classes/hands/_interfaces'


function card(name: string): Card {
  let [value , suit] = name.split('Of')
  // i want to use camel case and use plural form for suits ex: aceOfSpades becomes 'ace' 'spade'
  return { value: CardValue[value], suit: suit.toLowerCase().slice(0,-1)}
}

export { card }
