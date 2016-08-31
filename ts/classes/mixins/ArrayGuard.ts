interface ArrayGuardParams {
  typeName: string,
  arr: any[],
  maxLength: number,
  minLength?: number,
  customErrorClass?: ErrorConstructor
}

class ArrayGuard {
  checkArray(params: ArrayGuardParams) {
    let { typeName: customName, arr, maxLength, minLength: expectedMinLength, customErrorClass } = params;
    let typeName = customName || ''
    let error = customErrorClass || Error;
    let minLength = expectedMinLength || 0;

    if (!Array.isArray(arr)) {
      throw new error(`Incorrect type: actual: ${typeof arr}, expected: ${typeName}[]`)
    }
    if (arr.length > maxLength || arr.length < minLength) {
      throw new error(`${typeName}[].length = ${arr.length}, expected length between ${minLength} and ${maxLength}`)
    }
  }
}

export { ArrayGuardParams, ArrayGuard }