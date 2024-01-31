import { OfTrueTypeAsString } from './true-as-string';
import { OfFalseTypeAsString } from './false-as-string';

export function OfBooleanTypeAsString(arg: unknown): arg is string {
  return OfTrueTypeAsString(arg) || OfFalseTypeAsString(arg);
}
