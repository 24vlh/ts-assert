import { OfNumberType } from './number';

export function OfIntegerType(arg: unknown): arg is number {
  return OfNumberType(arg) && Number.isInteger(arg);
}
