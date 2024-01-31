import { OfPrimitiveOrBooleanTypeAsString } from './primitive-or-boolean-as-string';

test('OfPrimitiveOrBooleanTypeAsString: Expecting null as string to be true', () => {
  expect(OfPrimitiveOrBooleanTypeAsString('null')).toBe(true);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting undefined as string to be true', () => {
  expect(OfPrimitiveOrBooleanTypeAsString('undefined')).toBe(true);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting true as string to be true', () => {
  expect(OfPrimitiveOrBooleanTypeAsString('true')).toBe(true);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting false as string to be true', () => {
  expect(OfPrimitiveOrBooleanTypeAsString('false')).toBe(true);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting null to be false', () => {
  expect(OfPrimitiveOrBooleanTypeAsString(null)).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting undefined to be false', () => {
  expect(OfPrimitiveOrBooleanTypeAsString(undefined)).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting true to be false', () => {
  expect(OfPrimitiveOrBooleanTypeAsString(true)).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting false to be false', () => {
  expect(OfPrimitiveOrBooleanTypeAsString(false)).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting 2 as a string to be false', () => {
  expect(OfPrimitiveOrBooleanTypeAsString('2')).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting 2 to be false', () => {
  expect(OfPrimitiveOrBooleanTypeAsString(2)).toBe(false);
});
