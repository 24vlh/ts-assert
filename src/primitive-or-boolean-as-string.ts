import { OfPrimitiveTypeAsString } from './primitive-as-string';
import { OfBooleanTypeAsString } from './boolean-as-string';

export function OfPrimitiveOrBooleanTypeAsString(
  arg: unknown
): arg is boolean | null | undefined {
  return OfPrimitiveTypeAsString(arg) || OfBooleanTypeAsString(arg);
}
