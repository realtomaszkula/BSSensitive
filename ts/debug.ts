import { HandRankSearch } from './classes/hands/_handReading'
import { CardValue } from './classes/hands/_interfaces'


let hand = new HandRankSearch(
  [ 
    { suit: 'spade', value: CardValue.ace  }, 
    { suit: 'diamond', value: CardValue.king  }, 
    { suit: 'club', value: CardValue.queen  }, 
    { suit: 'club', value: CardValue.jack  }, 
    { suit: 'club', value: CardValue.ten  }
  ]
)