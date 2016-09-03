declare module jasmine {
  export interface Matchers {
    toBeCardClassOf(expected: {});
    toBeOfTextureType(expectedTexture: string);
    toBeOfTextureType(expectedTexture: string, group: 'straight' | 'suit' | 'cardValue' | 'paired');
  }
}