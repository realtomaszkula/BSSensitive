class ParamsError extends Error {
  constructor(message, params?: {}) {
    super(message);
    if (params) {
      this.message = `${message} | PARAMS: ${JSON.stringify(params)}`
    } else {
      this.message = message;
    }
    this.name = 'ParamsError';
  }
}

export { ParamsError }