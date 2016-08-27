import { HandRankSearch } from './classes/hands/_handReading'
import { CardValue } from './classes/hands/_interfaces'


let        hand = new HandRankSearch(
        [ 
          { suit: 'spade', value: CardValue.ace  }, 
          { suit: 'diamond', value: CardValue.duce  }, 
          { suit: 'club', value: CardValue.three  }, 
          { suit: 'club', value: CardValue.four  }, 
          { suit: 'club', value: CardValue.five  }
        ]
      )