export function OfStringType(arg: unknown): arg is string {
  return Object.prototype.toString.call(arg) === '[object String]';
}
