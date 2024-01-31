import { OfArrayType } from './array';
import { OfBooleanType } from './boolean';

export function EmptyArray(arg: unknown): boolean | undefined {
  if (!OfArrayType(arg)) {
    return undefined;
  }

  return arg.length === 0;
}

export function NotEmptyArray(arg: unknown): boolean | undefined {
  const assertionResult = EmptyArray(arg);

  if (OfBooleanType(assertionResult)) {
    return !assertionResult;
  }

  return undefined;
}
