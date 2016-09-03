import { CardClass, BoardTextures } from './../../classes/_interfaces'
import { Board } from './../../classes/boards/board'
import { Pair } from './../../classes/hands/Pair'
import { TwoPair } from './../../classes/hands/TwoPair'
import { Trips } from './../../classes/hands/Trips'
import { Straight } from './../../classes/hands/Straight'
import { Flush } from './../../classes/hands/Flush'
import { FullHouse } from './../../classes/hands/FullHouse'
import { Quads } from './../../classes/hands/Quads'
import { StraightFlush } from './../../classes/hands/StraightFlush'
import { HighCard } from './../../classes/hands/HighCard'
import { Card }  from './../../classes/hands/Card' 
import { Texture }  from './../../classes/_interfaces' 
import { TextureTypes } from './../../classes/boards/TextureTypes/_TextureTypes'


function isCardClass(obj): boolean {
  let allowedClassNames = [ 'Pair', 'TwoPair', 'Trips', 'Straight', 'Flush', 'FullHouse', 'Quads', 'StraightFlush', 'HighCard' ]
  if (typeof obj  === 'function'){
    // if class
    return allowedClassNames.some( c => c === obj.name)
  } else {
    // if instance of class
    return allowedClassNames.some( c => c === obj.constructor.name )
  }
}


export let customMatchers = {
  toBeCardClassOf: (expected: () => any) => {
    return { 
      compare: (actual: CardClass, expected: any) => {
        if(expected === undefined)
          throw new Error('toBeCardClassOf called without arguments')
        if(!isCardClass(actual))
          throw new Error('toBeCardClassOf matcher must be used on instance of CardClass');
        if(!isCardClass(expected) )
          throw new Error('toBeCardClassOf matcher must be compared against CardClass class')

        let passed = actual instanceof expected;
        let expectedClassName = expected.name;
        let actualClassName = actual.constructor.name;
        let message;

        if(passed) {
          message = `Expected result NOT to be an instance of ${expectedClassName} instead of ${actualClassName};`
        } else {
          message = `Expected result to be an instance of ${expectedClassName} instead of ${actualClassName};`
        }

        return {
          pass: passed,
          message: message
        }
      }
    }
  },
  toBeOfTextureType: (expected: () => any) => {
    return {
      compare: (actual: TextureTypes | Board, expectedTexture: Texture, group) => {
        let passed: boolean;
        let message: string;
        if (actual instanceof TextureTypes) {
          passed = expectedTexture === actual.type
          if (passed) {
            message = `Expected ${actual.type} NOT to be of TextureType: ${expectedTexture}, failed obj: ${JSON.stringify(actual, null, '\t')}`
          } else {
            message = `Expected ${actual.type} to be of TextureType: ${expectedTexture}, failed obj: ${JSON.stringify(actual, null, '\t')}`
          }
        } else if (actual instanceof Board) {
          passed = expectedTexture === actual.textures[group]
          if (passed) {
            message = `Expected ${actual.textures[group]} NOT to equal ${expectedTexture}\n${JSON.stringify(actual.textures, null, '\t')}`
          } else {
            message = `Expected ${actual.textures[group]} to equal ${expectedTexture}\n${JSON.stringify(actual.textures, null, '\t')}`
          }
        } else {
          throw new Error('toBeOfTextureType matcher can only be used on Board or TextureType class')
        }
        return {
          pass: passed, 
          message: message
        }
      }
    }
  }
}