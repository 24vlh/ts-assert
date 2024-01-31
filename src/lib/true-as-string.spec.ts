import { OfTrueTypeAsString } from './true-as-string';

test('OfTrueTypeAsString: Expecting true as a string to be true', () => {
  expect(OfTrueTypeAsString('true')).toBe(true);
});

test('OfTrueTypeAsString: Expecting false as a string to be false', () => {
  expect(OfTrueTypeAsString('false')).toBe(false);
});

test('OfTrueTypeAsString: Expecting xyz string to be false', () => {
  expect(OfTrueTypeAsString('xyz')).toBe(false);
});

test('OfTrueTypeAsString: Expecting false to be false', () => {
  expect(OfTrueTypeAsString(false)).toBe(false);
});

test('OfTrueTypeAsString: Expecting true to be false', () => {
  expect(OfTrueTypeAsString(true)).toBe(false);
});

test('OfTrueTypeAsString: Expecting {} to be false', () => {
  expect(OfTrueTypeAsString({})).toBe(false);
});
