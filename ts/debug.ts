import { HandRankSearch } from './classes/hands/_handReading'
import { TheBestHand } from './classes/hands/_theBestHand'
import { CardValue } from './classes/_interfaces'
import { Pair } from './classes/hands/Pair'
import { card } from './specs/helpers/methods'
import { Board } from './classes/boards/board'
import { applyMixins } from './classes/mixins/_apply'
import { ParamsGuard } from './classes/mixins/paramsGuard'
import { TextureReaderFlop } from './classes/boards/TextureReader/Flop'
import { StraightTextureType } from './classes/boards/TextureTypes/Straight'

let values = [CardValue.ace, CardValue.duce, CardValue.three]
let textureType = new StraightTextureType({ values: values}).type