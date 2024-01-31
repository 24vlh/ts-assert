import { EmptyString, NotEmptyString } from './empty-string';

test('EmptyString: Expecting empty string to be true', () => {
  expect(EmptyString('')).toBe(true);
});

test('EmptyString: Expecting xyz to be false', () => {
  expect(EmptyString('xyz')).toBe(false);
});

test('EmptyString: Expecting 2 to be undefined', () => {
  expect(EmptyString(2)).toBe(undefined);
});

test('NotEmptyString: Expecting xyz to be true', () => {
  expect(NotEmptyString('xyz')).toBe(true);
});

test('NotEmptyString: Expecting empty string to be false', () => {
  expect(NotEmptyString('')).toBe(false);
});

test('NotEmptyString: Expecting 2 to be undefined', () => {
  expect(NotEmptyString(2)).toBe(undefined);
});
