class ParamsError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'ParamsError';
  }
}

export { ParamsError }