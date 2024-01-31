import { OfUndefinedType } from './undefined';

test('OfUndefinedType: Expecting undefined to be true', () => {
  expect(OfUndefinedType(undefined)).toBe(true);
});

test('OfUndefinedType: Expecting undefined to be true', () => {
  const obj: any = {};
  expect(OfUndefinedType(obj.test)).toBe(true);
});

test('OfUndefinedType: Expecting 2.14 to be false', () => {
  expect(OfUndefinedType(2.14)).toBe(false);
});

test('OfUndefinedType: Expecting undefined as a string to be false', () => {
  expect(OfUndefinedType('undefined')).toBe(false);
});

test('OfUndefinedType: Expecting 2 as a string to be false', () => {
  expect(OfUndefinedType('2')).toBe(false);
});

test('OfUndefinedType: Expecting true to be false', () => {
  expect(OfUndefinedType(true)).toBe(false);
});

test('OfUndefinedType: Expecting {} to be false', () => {
  expect(OfUndefinedType({})).toBe(false);
});
