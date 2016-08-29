import { HandRankSearch } from './classes/hands/_handReading'
import { TheBestHand } from './classes/hands/_theBestHand'
import { CardValue } from './classes/hands/_interfaces'
import { card } from './specs/helpers/methods'

let playerCards = [card('aceOfSpades'), card('kingOfSpades'), card('queenOfSpades'), card('threeOfSpades')]
let boardCards = [card('duceOfSpades'), card('fourOfSpades'), card('fiveOfSpades')]
let theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})