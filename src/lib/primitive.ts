import { OfNullType } from './null';
import { OfUndefinedType } from './undefined';

export function OfPrimitiveType(arg: unknown): arg is null | undefined {
  return OfNullType(arg) || OfUndefinedType(arg);
}
