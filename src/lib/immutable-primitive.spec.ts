import {NotOfImmutablePrimitiveType, OfImmutablePrimitiveType} from './immutable-primitive';

test('OfImmutablePrimitiveType: Expecting null to be true', () => {
    expect(OfImmutablePrimitiveType(null)).toBe(true);
});

test('OfImmutablePrimitiveType: Expecting undefined to be true', () => {
    expect(OfImmutablePrimitiveType(undefined)).toBe(true);
});

test('OfImmutablePrimitiveType: Expecting true to be true', () => {
    expect(OfImmutablePrimitiveType(true)).toBe(true);
});

test('OfImmutablePrimitiveType: Expecting false to be true', () => {
    expect(OfImmutablePrimitiveType(false)).toBe(true);
});

test('OfImmutablePrimitiveType: Expecting null as a string to be true', () => {
    expect(OfImmutablePrimitiveType('null')).toBe(true);
});

test('OfImmutablePrimitiveType: Expecting undefined as a string to be true', () => {
    expect(OfImmutablePrimitiveType('undefined')).toBe(true);
});

test('OfImmutablePrimitiveType: Expecting 2 as a string to be true', () => {
    expect(OfImmutablePrimitiveType('2')).toBe(true);
});

test('OfImmutablePrimitiveType: Expecting 2 to be true', () => {
    expect(OfImmutablePrimitiveType(2)).toBe(true);
});

test('OfImmutablePrimitiveType: Expecting new Array([]) to be false', () => {
    expect(OfImmutablePrimitiveType(new Array([]))).toBe(false);
});

test('NotOfImmutablePrimitiveType: Expecting null to be false', () => {
    expect(NotOfImmutablePrimitiveType(null)).toBe(false);
});

test('NotOfImmutablePrimitiveType: Expecting undefined to be false', () => {
    expect(NotOfImmutablePrimitiveType(undefined)).toBe(false);
});

test('NotOfImmutablePrimitiveType: Expecting true to be false', () => {
    expect(NotOfImmutablePrimitiveType(true)).toBe(false);
});

test('NotOfImmutablePrimitiveType: Expecting false to be false', () => {
    expect(NotOfImmutablePrimitiveType(false)).toBe(false);
});

test('NotOfImmutablePrimitiveType: Expecting null as a string to be false', () => {
    expect(NotOfImmutablePrimitiveType('null')).toBe(false);
});

test('NotOfImmutablePrimitiveType: Expecting undefined as a string to be false', () => {
    expect(NotOfImmutablePrimitiveType('undefined')).toBe(false);
});

test('NotOfImmutablePrimitiveType: Expecting 2 as a string to be false', () => {
    expect(NotOfImmutablePrimitiveType('2')).toBe(false);
});

test('NotOfImmutablePrimitiveType: Expecting 2 to be false', () => {
    expect(NotOfImmutablePrimitiveType(2)).toBe(false);
});

test('NotOfImmutablePrimitiveType: Expecting new Array([]) to be true', () => {
    expect(NotOfImmutablePrimitiveType(new Array([]))).toBe(true);
});
