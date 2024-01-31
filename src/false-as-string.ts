import { OfStringType } from './string';

export function OfFalseTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && arg === 'false';
}
