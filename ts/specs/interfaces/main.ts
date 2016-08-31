import { HandStrength, CardValue, Card} from './../../classes/_interfaces'

interface stepPairDefault {
  pair: CardValue,
  handStrength: HandStrength
}

interface step {
  cards: [Card, Card, Card, Card, Card]
}

export { step, stepPairDefault}