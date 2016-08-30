import { HandRankSearch } from './classes/hands/_handReading'
import { TheBestHand } from './classes/hands/_theBestHand'
import { CardValue } from './classes/hands/_interfaces'
import { Pair } from './classes/hands/Pair'
import { card } from './specs/helpers/methods'

let p = new Pair({cards: Array.of( { value: -5 , suit: 'spade'},), handStrength: ''});