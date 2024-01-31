import { OfNumberType } from './number';

export function OfFloatType(arg: unknown): arg is number {
  return OfNumberType(arg) && arg % 1 !== 0;
}
