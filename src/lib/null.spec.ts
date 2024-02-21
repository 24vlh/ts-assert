import {NotOfNullType, OfNullType} from './null';

test('OfNullType: Expecting null to be true', () => {
    expect(OfNullType(null)).toBe(true);
});

test('OfNullType: Expecting 2.14 to be false', () => {
    expect(OfNullType(2.14)).toBe(false);
});

test('OfNullType: Expecting null as a string to be false', () => {
    expect(OfNullType('null')).toBe(false);
});

test('OfNullType: Expecting 2 as a string to be false', () => {
    expect(OfNullType('2')).toBe(false);
});

test('OfNullType: Expecting true to be false', () => {
    expect(OfNullType(true)).toBe(false);
});

test('OfNullType: Expecting {} to be false', () => {
    expect(OfNullType({})).toBe(false);
});

test('NotOfNullType: Expecting null to be false', () => {
    expect(NotOfNullType(null)).toBe(false);
});

test('NotOfNullType: Expecting 2.14 to be true', () => {
    expect(NotOfNullType(2.14)).toBe(true);
});

test('NotOfNullType: Expecting null as a string to be true', () => {
    expect(NotOfNullType('null')).toBe(true);
});

test('NotOfNullType: Expecting 2 as a string to be true', () => {
    expect(NotOfNullType('2')).toBe(true);
});

test('NotOfNullType: Expecting true to be true', () => {
    expect(NotOfNullType(true)).toBe(true);
});

test('NotOfNullType: Expecting {} to be true', () => {
    expect(NotOfNullType({})).toBe(true);
});
