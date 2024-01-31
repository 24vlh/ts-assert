import { OfFalseTypeAsString } from './false-as-string';

test('OfFalseTypeAsString: Expecting false as a string to be true', () => {
  expect(OfFalseTypeAsString('false')).toBe(true);
});

test('OfFalseTypeAsString: Expecting true as a string to be false', () => {
  expect(OfFalseTypeAsString('true')).toBe(false);
});

test('OfFalseTypeAsString: Expecting xyz string to be false', () => {
  expect(OfFalseTypeAsString('xyz')).toBe(false);
});

test('OfFalseTypeAsString: Expecting true to be false', () => {
  expect(OfFalseTypeAsString(true)).toBe(false);
});

test('OfFalseTypeAsString: Expecting false to be false', () => {
  expect(OfFalseTypeAsString(false)).toBe(false);
});

test('OfFalseTypeAsString: Expecting {} to be false', () => {
  expect(OfFalseTypeAsString({})).toBe(false);
});
