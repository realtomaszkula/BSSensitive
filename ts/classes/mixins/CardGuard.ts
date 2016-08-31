import { Card } from '../_interfaces'
import { ParamsError } from '../errors/errors'

class CardGuard {
  checkCard(card: Card) {
      if (typeof card !== 'object') 
        throw new ParamsError(`card must be an object: {value, suit}`)
      if (!(card.value)) throw new ParamsError(`card must have property of value`)
      if (!(card.suit)) throw new ParamsError(`card must have property of suit`)
  }
}

export { CardGuard }
