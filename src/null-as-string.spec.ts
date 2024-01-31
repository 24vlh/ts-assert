import { OfNullTypeAsString } from './null-as-string';

test('OfNullTypeAsString: Expecting null as a string to be true', () => {
  expect(OfNullTypeAsString('null')).toBe(true);
});

test('OfNullTypeAsString: Expecting null to be false', () => {
  expect(OfNullTypeAsString(null)).toBe(false);
});

test('OfNullTypeAsString: Expecting 2.14 to be false', () => {
  expect(OfNullTypeAsString(2.14)).toBe(false);
});

test('OfNullTypeAsString: Expecting 2 as a string to be false', () => {
  expect(OfNullTypeAsString('2')).toBe(false);
});

test('OfNullTypeAsString: Expecting true to be false', () => {
  expect(OfNullTypeAsString(true)).toBe(false);
});

test('OfNullTypeAsString: Expecting {} to be false', () => {
  expect(OfNullTypeAsString({})).toBe(false);
});
