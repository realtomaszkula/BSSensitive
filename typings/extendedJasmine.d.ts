declare module jasmine {
  export interface Matchers {
    toBeCardClassOf(expected: {});
    toBeTextureOf(expected: string);
    toBeOfTextureType(expectedTexture: string);
  }
}