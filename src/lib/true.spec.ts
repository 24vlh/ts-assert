import {NotOfTrueType, OfTrueType} from './true';

test('OfTrueType: Expecting true to be true', () => {
    expect(OfTrueType(true)).toBe(true);
});

test('OfTrueType: Expecting true as a string to be false', () => {
    expect(OfTrueType('true')).toBe(false);
});

test('OfTrueType: Expecting false as a string to be false', () => {
    expect(OfTrueType('false')).toBe(false);
});

test('OfTrueType: Expecting xyz string to be false', () => {
    expect(OfTrueType('xyz')).toBe(false);
});

test('OfTrueType: Expecting false to be false', () => {
    expect(OfTrueType(false)).toBe(false);
});

test('OfTrueType: Expecting {} to be false', () => {
    expect(OfTrueType({})).toBe(false);
});


test('NotOfTrueType: Expecting true to be false', () => {
    expect(NotOfTrueType(true)).toBe(false);
});

test('NotOfTrueType: Expecting true as a string to be true', () => {
    expect(NotOfTrueType('true')).toBe(true);
});

test('NotOfTrueType: Expecting false as a string to be true', () => {
    expect(NotOfTrueType('false')).toBe(true);
});

test('NotOfTrueType: Expecting xyz string to be true', () => {
    expect(NotOfTrueType('xyz')).toBe(true);
});

test('NotOfTrueType: Expecting false to be true', () => {
    expect(NotOfTrueType(false)).toBe(true);
});

test('NotOfTrueType: Expecting {} to be true', () => {
    expect(NotOfTrueType({})).toBe(true);
});
