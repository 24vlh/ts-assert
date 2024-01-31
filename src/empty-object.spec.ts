import { EmptyObject, NotEmptyObject } from './empty-object';

test('EmptyObject: Expecting {} to be true', () => {
  expect(EmptyObject({})).toBe(true);
});

test('EmptyObject: Expecting { key: null } to be false', () => {
  expect(EmptyObject({ key: null })).toBe(false);
});

test('EmptyObject: Expecting 2 to be undefined', () => {
  expect(EmptyObject(2)).toBe(undefined);
});

test('NotEmptyObject: Expecting { key: null } to be true', () => {
  expect(NotEmptyObject({ key: null })).toBe(true);
});

test('NotEmptyObject: Expecting {} to be false', () => {
  expect(NotEmptyObject({})).toBe(false);
});

test('NotEmptyObject: Expecting 2 to be undefined', () => {
  expect(NotEmptyObject(2)).toBe(undefined);
});
