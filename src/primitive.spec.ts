import { OfPrimitiveType } from './primitive';

test('OfPrimitiveType: Expecting null to be true', () => {
  expect(OfPrimitiveType(null)).toBe(true);
});

test('OfPrimitiveType: Expecting undefined to be true', () => {
  expect(OfPrimitiveType(undefined)).toBe(true);
});

test('OfPrimitiveType: Expecting true to be false', () => {
  expect(OfPrimitiveType(true)).toBe(false);
});

test('OfPrimitiveType: Expecting false to be false', () => {
  expect(OfPrimitiveType(false)).toBe(false);
});

test('OfPrimitiveType: Expecting null as a string to be false', () => {
  expect(OfPrimitiveType('null')).toBe(false);
});

test('OfPrimitiveType: Expecting undefined as a string to be false', () => {
  expect(OfPrimitiveType('undefined')).toBe(false);
});

test('OfPrimitiveType: Expecting 2 as a string to be false', () => {
  expect(OfPrimitiveType('2')).toBe(false);
});

test('OfPrimitiveType: Expecting 2 to be false', () => {
  expect(OfPrimitiveType(2)).toBe(false);
});
