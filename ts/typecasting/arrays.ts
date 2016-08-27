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

export { returnThreeCast, returnFiveCast }