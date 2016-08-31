import { ParamsError } from './../errors/errors'

interface ParamsGuardParams {
  actualParams: {},
  expectedKeys: string[]
}

class ParamsGuard {
  checkParams(params: ParamsGuardParams): void {
    let { actualParams, expectedKeys } = params;

    if (!actualParams) throw new ParamsError('Object constructor called without params.', actualParams)

    let isJSON = Object.getPrototypeOf({}) === Object.getPrototypeOf(actualParams)
    if (!isJSON) throw new ParamsError('Object constructor accepts {} params', actualParams);

    let actualKeys = Object.keys(actualParams);

    let missingKeys = expectedKeys.filter( expectedKey => {
      return !actualKeys.some( actualKey => actualKey === expectedKey)
    })

    if( missingKeys.length > 0 ) throw new ParamsError(`Params missing key(s): ${missingKeys.join(', ')}`, actualParams)
  }
}

export { ParamsGuard, ParamsGuardParams }

