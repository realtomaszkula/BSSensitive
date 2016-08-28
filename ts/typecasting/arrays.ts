import { Suit } from './../classes/hands/_interfaces'

function returnThreeCast<T>(arr: T[]): [T, T, T] {
  if (arr.length !== 3) {
    throw new Error('Array should have length of 3')
  }
  return <any>arr;
}

function returnFiveCast<T>(arr: T[]): [T, T, T, T, T] {
  if (arr.length !== 5)
    throw new Error('Array should have length of 5')
    return <any>arr;
}

function castSuit(arg:string): Suit {
	let isSuit = ['spade', 'club', 'diamond', 'heart'].some( s => s === arg)
	if(!isSuit) throw new Error('Incorrect suit name')
	return <any>arg
}

export { returnThreeCast, returnFiveCast, castSuit }