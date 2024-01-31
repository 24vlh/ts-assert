import { OfObjectType } from './object';

test('OfObjectType: Expecting {} to be true', () => {
  expect(OfObjectType({})).toBe(true);
});

test('OfObjectType: Expecting new Test() to be true', () => {
  class Test {}

  expect(OfObjectType(new Test())).toBe(true);
});

test('OfObjectType: Expecting String to be false', () => {
  expect(OfObjectType(String)).toBe(false);
});

test('OfObjectType: Expecting 2 to be false', () => {
  expect(OfObjectType(2)).toBe(false);
});
