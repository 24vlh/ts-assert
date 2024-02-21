import {NotOfNumericType, OfNumericType} from './numeric';

test('OfNumericType: Expecting 2 to be true', () => {
    expect(OfNumericType(2)).toBe(true);
});

test('OfNumericType: Expecting 2.14 to be true', () => {
    expect(OfNumericType(2.14)).toBe(true);
});

test('OfNumericType: Expecting 2 as a string to be true', () => {
    expect(OfNumericType('2')).toBe(true);
});

test('OfNumericType: Expecting 2.14 as a string to be true', () => {
    expect(OfNumericType('2.14')).toBe(true);
});

test('OfNumericType: Expecting true to be false', () => {
    expect(OfNumericType(true)).toBe(false);
});

test('OfNumericType: Expecting {} to be false', () => {
    expect(OfNumericType({})).toBe(false);
});

test('NotOfNumericType: Expecting 2 to be false', () => {
    expect(NotOfNumericType(2)).toBe(false);
});

test('NotOfNumericType: Expecting 2.14 to be false', () => {
    expect(NotOfNumericType(2.14)).toBe(false);
});

test('NotOfNumericType: Expecting 2 as a string to be false', () => {
    expect(NotOfNumericType('2')).toBe(false);
});

test('NotOfNumericType: Expecting 2.14 as a string to be false', () => {
    expect(NotOfNumericType('2.14')).toBe(false);
});

test('NotOfNumericType: Expecting true to be true', () => {
    expect(NotOfNumericType(true)).toBe(true);
});

test('NotOfNumericType: Expecting {} to be true', () => {
    expect(NotOfNumericType({})).toBe(true);
});
