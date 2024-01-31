import { EmptyArray, NotEmptyArray } from './empty-array';

test('EmptyArray: Expecting [] to be true', () => {
  expect(EmptyArray([])).toBe(true);
});

test('EmptyArray: Expecting [ 1, 2 ] to be false', () => {
  expect(EmptyArray([1, 2])).toBe(false);
});

test('EmptyArray: Expecting 2 to be undefined', () => {
  expect(EmptyArray(2)).toBe(undefined);
});

test('NotEmptyArray: Expecting [ 1, 2 ] to be true', () => {
  expect(NotEmptyArray([1, 2])).toBe(true);
});

test('NotEmptyArray: Expecting [] to be false', () => {
  expect(NotEmptyArray([])).toBe(false);
});

test('NotEmptyArray: Expecting 2 to be undefined', () => {
  expect(NotEmptyArray(2)).toBe(undefined);
});
