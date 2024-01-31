import { OfNumberType } from './number';
import { OfNumberTypeAsString } from './number-as-string';

export function OfNumericType(arg: unknown): arg is number | string {
  return OfNumberType(arg) || OfNumberTypeAsString(arg);
}
