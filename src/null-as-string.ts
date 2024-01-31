import { OfStringType } from './string';

export function OfNullTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && arg === 'null';
}
