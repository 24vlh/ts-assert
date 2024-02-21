import {NotOfFalseType, OfFalseType} from './false';

test('OfFalseType: Expecting false to be true', () => {
    expect(OfFalseType(false)).toBe(true);
});

test('OfFalseType: Expecting false as a string to be false', () => {
    expect(OfFalseType('false')).toBe(false);
});

test('OfFalseType: Expecting true as a string to be false', () => {
    expect(OfFalseType('true')).toBe(false);
});

test('OfFalseType: Expecting xyz string to be false', () => {
    expect(OfFalseType('xyz')).toBe(false);
});

test('OfFalseType: Expecting true to be false', () => {
    expect(OfFalseType(true)).toBe(false);
});

test('OfFalseType: Expecting {} to be false', () => {
    expect(OfFalseType({})).toBe(false);
});

test('NotOfFalseType: Expecting false to be false', () => {
    expect(NotOfFalseType(false)).toBe(false);
});

test('NotOfFalseType: Expecting false as a string to be true', () => {
    expect(NotOfFalseType('false')).toBe(true);
});

test('NotOfFalseType: Expecting true as a string to be true', () => {
    expect(NotOfFalseType('true')).toBe(true);
});

test('NotOfFalseType: Expecting xyz string to be true', () => {
    expect(NotOfFalseType('xyz')).toBe(true);
});

test('NotOfFalseType: Expecting true to be true', () => {
    expect(NotOfFalseType(true)).toBe(true);
});

test('NotOfFalseType: Expecting {} to be true', () => {
    expect(NotOfFalseType({})).toBe(true);
});
