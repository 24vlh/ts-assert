import { OfBooleanType } from './boolean';

test('OfBooleanType: Expecting true to be true', () => {
  expect(OfBooleanType(true)).toBe(true);
});

test('OfBooleanType: Expecting false to be true', () => {
  expect(OfBooleanType(false)).toBe(true);
});

test('OfBooleanType: Expecting true as a string to be false', () => {
  expect(OfBooleanType('true')).toBe(false);
});

test('OfBooleanType: Expecting {} to be false', () => {
  expect(OfBooleanType({})).toBe(false);
});
