import {Assert, AssertDefined, AssertNonEmptyString} from './assert';

test('Assert: does not throw for truthy condition', () => {
  expect(() => Assert(true)).not.toThrow();
});

test('Assert: throws for falsy condition', () => {
  expect(() => Assert(false, 'failed')).toThrow('failed');
});

test('AssertDefined: does not throw for defined value', () => {
  expect(() => AssertDefined(1)).not.toThrow();
});

test('AssertDefined: throws for undefined value', () => {
  expect(() => AssertDefined(undefined, 'missing')).toThrow('missing');
});

test('AssertNonEmptyString: accepts non-empty string', () => {
  expect(() => AssertNonEmptyString('value')).not.toThrow();
});

test('AssertNonEmptyString: throws for empty/invalid string', () => {
  expect(() => AssertNonEmptyString('   ', 'empty')).toThrow('empty');
  expect(() => AssertNonEmptyString(1, 'invalid')).toThrow('invalid');
});
