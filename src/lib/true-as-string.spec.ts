import {NotOfTrueTypeAsString, OfTrueTypeAsString} from './true-as-string';

test('OfTrueTypeAsString: Expecting true as a string to be true', () => {
    expect(OfTrueTypeAsString('true')).toBe(true);
});

test('OfTrueTypeAsString: Expecting false as a string to be false', () => {
    expect(OfTrueTypeAsString('false')).toBe(false);
});

test('OfTrueTypeAsString: Expecting xyz string to be false', () => {
    expect(OfTrueTypeAsString('xyz')).toBe(false);
});

test('OfTrueTypeAsString: Expecting false to be false', () => {
    expect(OfTrueTypeAsString(false)).toBe(false);
});

test('OfTrueTypeAsString: Expecting true to be false', () => {
    expect(OfTrueTypeAsString(true)).toBe(false);
});

test('OfTrueTypeAsString: Expecting {} to be false', () => {
    expect(OfTrueTypeAsString({})).toBe(false);
});

test('NotOfTrueTypeAsString: Expecting true as a string to be false', () => {
    expect(NotOfTrueTypeAsString('true')).toBe(false);
});

test('NotOfTrueTypeAsString: Expecting false as a string to be true', () => {
    expect(NotOfTrueTypeAsString('false')).toBe(true);
});

test('NotOfTrueTypeAsString: Expecting xyz string to be true', () => {
    expect(NotOfTrueTypeAsString('xyz')).toBe(true);
});

test('NotOfTrueTypeAsString: Expecting false to be true', () => {
    expect(NotOfTrueTypeAsString(false)).toBe(true);
});

test('NotOfTrueTypeAsString: Expecting true to be true', () => {
    expect(NotOfTrueTypeAsString(true)).toBe(true);
});

test('NotOfTrueTypeAsString: Expecting {} to be true', () => {
    expect(NotOfTrueTypeAsString({})).toBe(true);
});
