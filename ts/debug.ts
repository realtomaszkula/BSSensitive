import { HandRankSearch } from './classes/hands/_handReading'
import { CardValue } from './classes/hands/_interfaces'

function card(name: string): {} {
  let [value, suit] = name.split('Of')
  return { value: value, suit: suit }
}

card('aceOfclubs')