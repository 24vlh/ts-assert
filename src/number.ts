export function OfNumberType(arg: unknown): arg is number {
  return (
    Object.prototype.toString.call(arg) === '[object Number]' &&
    Number.isFinite(arg)
  );
}
