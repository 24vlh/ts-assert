import { OfNumericType } from './numeric';

test('OfNumericType: Expecting 2 to be true', () => {
  expect(OfNumericType(2)).toBe(true);
});

test('OfNumericType: Expecting 2.14 to be true', () => {
  expect(OfNumericType(2.14)).toBe(true);
});

test('OfNumericType: Expecting 2 as a string to be true', () => {
  expect(OfNumericType('2')).toBe(true);
});

test('OfNumericType: Expecting 2.14 as a string to be true', () => {
  expect(OfNumericType('2.14')).toBe(true);
});

test('OfNumericType: Expecting true to be false', () => {
  expect(OfNumericType(true)).toBe(false);
});

test('OfNumericType: Expecting {} to be false', () => {
  expect(OfNumericType({})).toBe(false);
});
