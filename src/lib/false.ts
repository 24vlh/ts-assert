import { OfBooleanType } from './boolean';

export function OfFalseType(arg: unknown): arg is false {
  return OfBooleanType(arg) && !arg;
}
