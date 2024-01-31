import { OfNumberType } from './number';

test('OfNumberType: Expecting 2 to be true', () => {
  expect(OfNumberType(2)).toBe(true);
});

test('OfNumberType: Expecting 2.14 to be true', () => {
  expect(OfNumberType(2.14)).toBe(true);
});

test('OfNumberType: Expecting 2 as a string to be false', () => {
  expect(OfNumberType('2')).toBe(false);
});

test('OfNumberType: Expecting 2.14 as a string to be false', () => {
  expect(OfNumberType('2.14')).toBe(false);
});

test('OfNumberType: Expecting true to be false', () => {
  expect(OfNumberType(true)).toBe(false);
});

test('OfNumberType: Expecting {} to be false', () => {
  expect(OfNumberType({})).toBe(false);
});
