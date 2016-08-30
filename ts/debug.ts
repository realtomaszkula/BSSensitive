import { HandRankSearch } from './classes/hands/_handReading'
import { TheBestHand } from './classes/hands/_theBestHand'
import { CardValue } from './classes/hands/_interfaces'
import { card } from './specs/helpers/methods'

      ;

          let playerCards = [ card('aceOfSpades'), card('jackOfDiamonds') ]
          let boardCards = [card('kingOfClubs'), card('queenOfspades'), 
              card('threeOfSpades'), card('fourOfClubs') ]
          let theBestHand: TheBestHand = new TheBestHand({playerCards: playerCards, boardCards: boardCards})