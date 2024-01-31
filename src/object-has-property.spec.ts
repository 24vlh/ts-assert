import { ObjectHasProperty } from './object-has-property';

test('ObjectHasProperty: Expecting key in { key: 1 } to be true', () => {
  expect(ObjectHasProperty('key', { key: 1 })).toBe(true);
});

test('ObjectHasProperty: Expecting key in { key2: 1 } to be false', () => {
  expect(ObjectHasProperty('key', { key2: 1 })).toBe(false);
});

test('ObjectHasProperty: Expecting key in 2 to be false', () => {
  expect(ObjectHasProperty('key', 2)).toBe(false);
});
