export function OfNullType(arg: unknown): arg is null {
  return Object.prototype.toString.call(arg) === '[object Null]';
}
