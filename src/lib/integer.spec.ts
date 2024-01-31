import { OfIntegerType } from './integer';

test('OfIntegerType: Expecting 2 to be true', () => {
  expect(OfIntegerType(2)).toBe(true);
});

test('OfIntegerType: Expecting 2.14 to be false', () => {
  expect(OfIntegerType(2.14)).toBe(false);
});

test('OfIntegerType: Expecting 2 as a string to be false', () => {
  expect(OfIntegerType('2')).toBe(false);
});

test('OfIntegerType: Expecting true to be false', () => {
  expect(OfIntegerType(true)).toBe(false);
});

test('OfIntegerType: Expecting {} to be false', () => {
  expect(OfIntegerType({})).toBe(false);
});
