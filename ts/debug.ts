import { HandRankSearch } from './classes/hands/_handReading'
import { CardValue } from './classes/hands/_interfaces'


let       hand = new HandRankSearch(
        [ 
          { suit: 'club', value: CardValue.ace  }, 
          { suit: 'club', value: CardValue.king  }, 
          { suit: 'club', value: CardValue.queen  }, 
          { suit: 'club', value: CardValue.jack  }, 
          { suit: 'club', value: CardValue.duce  }
        ]
      ) 