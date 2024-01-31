import { OfBooleanType } from './boolean';

export function OfTrueType(arg: unknown): arg is true {
  return OfBooleanType(arg) && arg;
}
