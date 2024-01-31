export function OfSymbolType(arg: unknown): arg is symbol {
  return Object.prototype.toString.call(arg) === '[object Symbol]';
}
