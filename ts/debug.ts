import { HandRankSearch } from './classes/hands/_handReading'
import { TheBestHand } from './classes/hands/_theBestHand'
import { CardValue } from './classes/_interfaces'
import { Pair } from './classes/hands/Pair'
import { card } from './specs/helpers/methods'
import { Board } from './classes/boards/Board'
import { applyMixins } from './classes/mixins/_apply'
import { ParamsGuard } from './classes/mixins/paramsGuard'


let b = new Board({cards: []})