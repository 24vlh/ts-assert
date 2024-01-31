import { OfStringType } from './string';

test('OfStringType: Expecting test to be true', () => {
  expect(OfStringType('test')).toBe(true);
});

test('OfStringType: Expecting JSON.stringify({}) to be true', () => {
  expect(OfStringType(JSON.stringify({}))).toBe(true);
});

test('OfStringType: Expecting (1).toString() to be true', () => {
  expect(OfStringType((1).toString())).toBe(true);
});

test('OfStringType: Expecting 1 to be false', () => {
  expect(OfStringType(1)).toBe(false);
});

test('OfStringType: Expecting {} to be false', () => {
  expect(OfStringType({})).toBe(false);
});
