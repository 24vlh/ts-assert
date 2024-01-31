import { OfArrayType } from './array';

test('OfArrayType: Expecting [] to be true', () => {
  expect(OfArrayType([])).toBe(true);
});

test('OfArrayType: Expecting new Array(2) to be true', () => {
  expect(OfArrayType(new Array(2))).toBe(true);
});

test('OfArrayType: Expecting Object.keys({}) to be true', () => {
  expect(OfArrayType(Object.keys({}))).toBe(true);
});

test('OfArrayType: Expecting [].keys() to be false', () => {
  expect(OfArrayType([].keys())).toBe(false);
});

test('OfArrayType: Expecting true to be false', () => {
  expect(OfArrayType(true)).toBe(false);
});

test('OfArrayType: Expecting {} to be false', () => {
  expect(OfArrayType({})).toBe(false);
});
