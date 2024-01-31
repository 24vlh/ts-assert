import { OfPrimitiveOrBooleanType } from './primitive-or-boolean';

test('OfPrimitiveOrBooleanType: Expecting null to be true', () => {
  expect(OfPrimitiveOrBooleanType(null)).toBe(true);
});

test('OfPrimitiveOrBooleanType: Expecting undefined to be true', () => {
  expect(OfPrimitiveOrBooleanType(undefined)).toBe(true);
});

test('OfPrimitiveOrBooleanType: Expecting true to be true', () => {
  expect(OfPrimitiveOrBooleanType(true)).toBe(true);
});

test('OfPrimitiveOrBooleanType: Expecting false to be true', () => {
  expect(OfPrimitiveOrBooleanType(false)).toBe(true);
});

test('OfPrimitiveOrBooleanType: Expecting null as a string to be false', () => {
  expect(OfPrimitiveOrBooleanType('null')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting undefined as a string to be false', () => {
  expect(OfPrimitiveOrBooleanType('undefined')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting true as a string to be false', () => {
  expect(OfPrimitiveOrBooleanType('true')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting false as a string to be false', () => {
  expect(OfPrimitiveOrBooleanType('false')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting 2 as a string to be false', () => {
  expect(OfPrimitiveOrBooleanType('2')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting 2 to be false', () => {
  expect(OfPrimitiveOrBooleanType(2)).toBe(false);
});
