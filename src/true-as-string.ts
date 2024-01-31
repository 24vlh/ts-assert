import { OfStringType } from './string';

export function OfTrueTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && arg === 'true';
}
