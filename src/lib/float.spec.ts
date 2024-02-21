import {NotOfFloatType, OfFloatType} from './float';

test('OfFloatType: Expecting 2.14 to be true', () => {
    expect(OfFloatType(2.14)).toBe(true);
});

test('OfFloatType: Expecting 2.14 as a string to be false', () => {
    expect(OfFloatType('2.14')).toBe(false);
});

test('OfFloatType: Expecting 2 to be false', () => {
    expect(OfFloatType(2)).toBe(false);
});

test('OfFloatType: Expecting 2 as a string to be false', () => {
    expect(OfFloatType('2')).toBe(false);
});

test('OfFloatType: Expecting true to be false', () => {
    expect(OfFloatType(true)).toBe(false);
});

test('OfFloatType: Expecting {} to be false', () => {
    expect(OfFloatType({})).toBe(false);
});

test('NotOfFloatType: Expecting 2.14 to be false', () => {
    expect(NotOfFloatType(2.14)).toBe(false);
});

test('NotOfFloatType: Expecting 2.14 as a string to be true', () => {
    expect(NotOfFloatType('2.14')).toBe(true);
});

test('NotOfFloatType: Expecting 2 to be true', () => {
    expect(NotOfFloatType(2)).toBe(true);
});

test('NotOfFloatType: Expecting 2 as a string to be true', () => {
    expect(NotOfFloatType('2')).toBe(true);
});

test('NotOfFloatType: Expecting true to be true', () => {
    expect(NotOfFloatType(true)).toBe(true);
});

test('NotOfFloatType: Expecting {} to be true', () => {
    expect(NotOfFloatType({})).toBe(true);
});
