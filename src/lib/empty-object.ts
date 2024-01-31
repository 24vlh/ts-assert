import { OfObjectType } from './object';
import { OfBooleanType } from './boolean';

export function EmptyObject(arg: unknown): boolean | undefined {
  if (!OfObjectType(arg)) {
    return undefined;
  }

  return Object.keys(arg).length === 0;
}

export function NotEmptyObject(arg: unknown): boolean | undefined {
  const assertionResult = EmptyObject(arg);

  if (OfBooleanType(assertionResult)) {
    return !assertionResult;
  }

  return undefined;
}
