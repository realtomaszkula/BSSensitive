import { HandRankSearch } from './classes/hands/_handReading'
import { TheBestHand } from './classes/hands/_theBestHand'
import { CardValue } from './classes/hands/_interfaces'
import { card } from './specs/helpers/methods'

      
let playerCards: OmahaHoleCards = [ card('aceOfSpades'), card('jackOfDiamonds'), card('kingOfClubs'), card('queenOfspades') ]
let boardCards: BoardCards = [ card('threeOfSpades'), card('fourOfClubs'), card('fiveOfDiamonds'), card('sevenOfDiamonds'), card('nineOfDiamonds') ]
let theBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})
