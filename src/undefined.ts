export function OfUndefinedType(arg: unknown): arg is undefined {
  return Object.prototype.toString.call(arg) === '[object Undefined]';
}
