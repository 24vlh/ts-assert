import { OfNullTypeAsString } from './null-as-string';
import { OfUndefinedTypeAsString } from './undefined-as-string';

export function OfPrimitiveTypeAsString(arg: unknown): arg is string {
  return OfNullTypeAsString(arg) || OfUndefinedTypeAsString(arg);
}
