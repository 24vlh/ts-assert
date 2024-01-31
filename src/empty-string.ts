import { OfStringType } from './string';
import { OfBooleanType } from './boolean';

export function EmptyString(arg: unknown): boolean | undefined {
  if (!OfStringType(arg)) {
    return undefined;
  }

  return arg.length === 0;
}

export function NotEmptyString(arg: unknown): boolean | undefined {
  const assertionResult = EmptyString(arg);

  if (OfBooleanType(assertionResult)) {
    return !assertionResult;
  }

  return undefined;
}
