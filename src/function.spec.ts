import { OfFunctionType } from './function';

test('OfFunctionType: Expecting () => true to be true', () => {
  expect(OfFunctionType(() => true)).toBe(true);
});

test('OfFunctionType: Expecting function tes(): void {} to be true', () => {
  expect(OfFunctionType(function tes(): void {})).toBe(true);
});

test('OfFunctionType: Expecting String to be true', () => {
  expect(OfFunctionType(String)).toBe(true);
});

test('OfFunctionType: Expecting 2 to be false', () => {
  expect(OfFunctionType('2')).toBe(false);
});

test('OfFunctionType: Expecting true to be false', () => {
  expect(OfFunctionType(true)).toBe(false);
});

test('OfFunctionType: Expecting {} to be false', () => {
  expect(OfFunctionType({})).toBe(false);
});
