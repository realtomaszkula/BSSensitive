import { ParamsError } from './../errors/errors'

interface ParamsGuardParams {
  actualParams: {},
  expectedKeys: string[]
}

class ParamsGuard {
  checkParams(params: ParamsGuardParams): void {
    if (typeof params !== 'object') throw new Error('params must be an object');

    let expectedKeys = params.expectedKeys;
    let actualKeys = Object.keys(params.actualParams);

    let missingKeys = expectedKeys.filter( expectedKey => {
      return !actualKeys.some( actualKey => actualKey === expectedKey)
    })

    if( missingKeys.length > 0 ) throw new ParamsError('params missing key(s): ' + missingKeys.join(', '))
  }
}

export { ParamsGuard, ParamsGuardParams }

