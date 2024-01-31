export function OfFunctionType<T>(arg: unknown): arg is T {
  return Object.prototype.toString.call(arg) === '[object Function]';
}
