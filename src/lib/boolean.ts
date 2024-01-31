export function OfBooleanType(arg: unknown): arg is boolean {
  return Object.prototype.toString.call(arg) === '[object Boolean]';
}
