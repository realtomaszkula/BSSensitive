import { HandClass, Card, CardClass, HandParams,  Suit, CardValue, StraightFlushParams } from './../_interfaces'
import { Hand } from './_hand'
import { Straight } from './Straight'

export class StraightFlush extends Straight implements HandClass {
}