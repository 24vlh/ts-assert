import { OfTrueType } from './true';

test('OfTrueType: Expecting true to be true', () => {
  expect(OfTrueType(true)).toBe(true);
});

test('OfTrueType: Expecting true as a string to be false', () => {
  expect(OfTrueType('true')).toBe(false);
});

test('OfTrueType: Expecting false as a string to be false', () => {
  expect(OfTrueType('false')).toBe(false);
});

test('OfTrueType: Expecting xyz string to be false', () => {
  expect(OfTrueType('xyz')).toBe(false);
});

test('OfTrueType: Expecting false to be false', () => {
  expect(OfTrueType(false)).toBe(false);
});

test('OfTrueType: Expecting {} to be false', () => {
  expect(OfTrueType({})).toBe(false);
});
