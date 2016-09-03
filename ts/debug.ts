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

import { hands } from './specs/HandParser/_PlayerParserHands'
import { PlayerParser } from './classes/HandParser/PlayerParser'
import { Player } from './classes/Player/Player'

let meta = hands.playersPropertiesSpec.meta.split('\n')
let seats = hands.playersPropertiesSpec.seats.split('\n')
let p = new PlayerParser({ hh: { meta: meta, seats: seats }})

let x  = 1;
let y = 5;