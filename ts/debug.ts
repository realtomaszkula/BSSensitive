import { HandRankSearch } from './classes/hands/_handReading'
import { TheBestHand } from './classes/hands/_theBestHand'
import { CardValue } from './classes/_interfaces'
import { Pair } from './classes/hands/Pair'
import { card } from './specs/helpers/methods'
import { Board } from './classes/boards/Board'
import { applyMixins } from './classes/mixins/_apply'
import { ParamsGuard } from './classes/mixins/paramsGuard'
import { TextureReaderFlop } from './classes/boards/TextureReaderFlop'

let flop = [card('aceOfSpades'), card('duceOfSpades'), card('sevenOfSpades')]
let params = { 
          boardObject: { flop: flop}
        }

let t = new TextureReaderFlop(params).result.textures
console.log(t)
let x =5;

  