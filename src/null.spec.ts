import { OfNullType } from './null';

test('OfNullType: Expecting null to be true', () => {
  expect(OfNullType(null)).toBe(true);
});

test('OfNullType: Expecting 2.14 to be false', () => {
  expect(OfNullType(2.14)).toBe(false);
});

test('OfNullType: Expecting null as a string to be false', () => {
  expect(OfNullType('null')).toBe(false);
});

test('OfNullType: Expecting 2 as a string to be false', () => {
  expect(OfNullType('2')).toBe(false);
});

test('OfNullType: Expecting true to be false', () => {
  expect(OfNullType(true)).toBe(false);
});

test('OfNullType: Expecting {} to be false', () => {
  expect(OfNullType({})).toBe(false);
});
