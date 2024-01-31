import { OfPrimitiveType } from './primitive';
import { OfBooleanType } from './boolean';

export function OfPrimitiveOrBooleanType(
  arg: unknown
): arg is boolean | null | undefined {
  return OfPrimitiveType(arg) || OfBooleanType(arg);
}
