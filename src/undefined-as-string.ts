import { OfStringType } from './string';

export function OfUndefinedTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && arg === 'undefined';
}
