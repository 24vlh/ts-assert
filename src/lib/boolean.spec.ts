import {NotOfBooleanType, OfBooleanType} from './boolean';

test('OfBooleanType: Expecting true to be true', () => {
    expect(OfBooleanType(true)).toBe(true);
});

test('OfBooleanType: Expecting false to be true', () => {
    expect(OfBooleanType(false)).toBe(true);
});

test('OfBooleanType: Expecting true as a string to be false', () => {
    expect(OfBooleanType('true')).toBe(false);
});

test('OfBooleanType: Expecting {} to be false', () => {
    expect(OfBooleanType({})).toBe(false);
});

test('NotOfBooleanType: Expecting false to be false', () => {
    expect(NotOfBooleanType(true)).toBe(false);
});

test('NotOfBooleanType: Expecting false to be false', () => {
    expect(NotOfBooleanType(true)).toBe(false);
});

test('NotOfBooleanType: Expecting true as a string to be true', () => {
    expect(NotOfBooleanType('true')).toBe(true);
});

test('NotOfBooleanType: Expecting true as a string to be true', () => {
    expect(NotOfBooleanType(1)).toBe(true);
});

test('NotOfBooleanType: Expecting {} to be true', () => {
    expect(NotOfBooleanType({})).toBe(true);
});
