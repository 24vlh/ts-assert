import {NotOfFalseTypeAsString, OfFalseTypeAsString} from './false-as-string';

test('OfFalseTypeAsString: Expecting false as a string to be true', () => {
    expect(OfFalseTypeAsString('false')).toBe(true);
});

test('OfFalseTypeAsString: Expecting true as a string to be false', () => {
    expect(OfFalseTypeAsString('true')).toBe(false);
});

test('OfFalseTypeAsString: Expecting xyz string to be false', () => {
    expect(OfFalseTypeAsString('xyz')).toBe(false);
});

test('OfFalseTypeAsString: Expecting true to be false', () => {
    expect(OfFalseTypeAsString(true)).toBe(false);
});

test('OfFalseTypeAsString: Expecting false to be false', () => {
    expect(OfFalseTypeAsString(false)).toBe(false);
});

test('OfFalseTypeAsString: Expecting {} to be false', () => {
    expect(OfFalseTypeAsString({})).toBe(false);
});

test('NotOfFalseTypeAsString: Expecting false as a string to be false', () => {
    expect(NotOfFalseTypeAsString('false')).toBe(false);
});

test('NotOfFalseTypeAsString: Expecting true as a string to be true', () => {
    expect(NotOfFalseTypeAsString('true')).toBe(true);
});

test('NotOfFalseTypeAsString: Expecting xyz string to be true', () => {
    expect(NotOfFalseTypeAsString('xyz')).toBe(true);
});

test('NotOfFalseTypeAsString: Expecting true to be true', () => {
    expect(NotOfFalseTypeAsString(true)).toBe(true);
});

test('NotOfFalseTypeAsString: Expecting false to be true', () => {
    expect(NotOfFalseTypeAsString(false)).toBe(true);
});

test('NotOfFalseTypeAsString: Expecting {} to be true', () => {
    expect(NotOfFalseTypeAsString({})).toBe(true);
});
