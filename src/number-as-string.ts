import { OfStringType } from './string';

export function OfNumberTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && /^\d+(\.\d+)?$/.test(arg);
}
