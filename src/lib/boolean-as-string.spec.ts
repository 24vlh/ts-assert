import { OfBooleanTypeAsString } from './boolean-as-string';

test('OfBooleanTypeAsString: Expecting true as a string to be true', () => {
  expect(OfBooleanTypeAsString('true')).toBe(true);
});

test('OfBooleanTypeAsString: Expecting false as a string to be true', () => {
  expect(OfBooleanTypeAsString('false')).toBe(true);
});

test('OfBooleanTypeAsString: Expecting xyz string to be false', () => {
  expect(OfBooleanTypeAsString('xyz')).toBe(false);
});

test('OfBooleanTypeAsString: Expecting true to be false', () => {
  expect(OfBooleanTypeAsString(true)).toBe(false);
});

test('OfBooleanTypeAsString: Expecting {} to be false', () => {
  expect(OfBooleanTypeAsString({})).toBe(false);
});
