export default class RPNError extends Error {
  constructor(...args: string[]) {
    super(...args);
    Error.captureStackTrace(this, RPNError);
  }
}
