import { OfPrimitiveTypeAsString } from './primitive-as-string';

test('OfPrimitiveTypeAsString: Expecting null as a string to be true', () => {
  expect(OfPrimitiveTypeAsString('null')).toBe(true);
});

test('OfPrimitiveTypeAsString: Expecting undefined as a string to be true', () => {
  expect(OfPrimitiveTypeAsString('undefined')).toBe(true);
});

test('OfPrimitiveTypeAsString: Expecting null to be false', () => {
  expect(OfPrimitiveTypeAsString(null)).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting undefined to be false', () => {
  expect(OfPrimitiveTypeAsString(undefined)).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting true to be false', () => {
  expect(OfPrimitiveTypeAsString(true)).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting false to be false', () => {
  expect(OfPrimitiveTypeAsString(false)).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting 2 as a string to be false', () => {
  expect(OfPrimitiveTypeAsString('2')).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting 2 to be false', () => {
  expect(OfPrimitiveTypeAsString(2)).toBe(false);
});
