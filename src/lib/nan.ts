export function OfNanType(arg: unknown): arg is typeof NaN {
  return Number.isNaN(arg);
}
