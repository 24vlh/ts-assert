import { OfType } from './of-type';
import { describe, test, expect } from '@jest/globals';
import { ObjectTypeValues } from './24vlh.type';

describe('OfType Function', () => {
  test('Should return true when tested with matching type', () => {
    const arg: unknown = 'string';
    const typeName: ObjectTypeValues = 'String';
    const result = OfType(arg, typeName);

    expect(result).toBeTruthy();
  });

  test('Should return false when tested with non-matching type', () => {
    const arg: unknown = 'string';
    const typeName: ObjectTypeValues = 'Number';
    const result = OfType(arg, typeName);

    expect(result).toBeFalsy();
  });

  // You can add more tests for each object type if necessary
});
