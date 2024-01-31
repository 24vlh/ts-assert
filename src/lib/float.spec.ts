import { OfFloatType } from './float';

test('OfFloatType: Expecting 2.14 to be true', () => {
  expect(OfFloatType(2.14)).toBe(true);
});

test('OfFloatType: Expecting 2.14 as a string to be true', () => {
  expect(OfFloatType('2.14')).toBe(false);
});

test('OfFloatType: Expecting 2 to be false', () => {
  expect(OfFloatType(2)).toBe(false);
});

test('OfFloatType: Expecting 2 as a string to be false', () => {
  expect(OfFloatType('2')).toBe(false);
});

test('OfFloatType: Expecting true to be false', () => {
  expect(OfFloatType(true)).toBe(false);
});

test('OfFloatType: Expecting {} to be false', () => {
  expect(OfFloatType({})).toBe(false);
});
