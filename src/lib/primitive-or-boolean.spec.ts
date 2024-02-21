import {NotOfPrimitiveOrBooleanType, OfPrimitiveOrBooleanType} from './primitive-or-boolean';

test('OfPrimitiveOrBooleanType: Expecting null to be true', () => {
    expect(OfPrimitiveOrBooleanType(null)).toBe(true);
});

test('OfPrimitiveOrBooleanType: Expecting undefined to be true', () => {
    expect(OfPrimitiveOrBooleanType(undefined)).toBe(true);
});

test('OfPrimitiveOrBooleanType: Expecting true to be true', () => {
    expect(OfPrimitiveOrBooleanType(true)).toBe(true);
});

test('OfPrimitiveOrBooleanType: Expecting false to be true', () => {
    expect(OfPrimitiveOrBooleanType(false)).toBe(true);
});

test('OfPrimitiveOrBooleanType: Expecting null as a string to be false', () => {
    expect(OfPrimitiveOrBooleanType('null')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting undefined as a string to be false', () => {
    expect(OfPrimitiveOrBooleanType('undefined')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting true as a string to be false', () => {
    expect(OfPrimitiveOrBooleanType('true')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting false as a string to be false', () => {
    expect(OfPrimitiveOrBooleanType('false')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting 2 as a string to be false', () => {
    expect(OfPrimitiveOrBooleanType('2')).toBe(false);
});

test('OfPrimitiveOrBooleanType: Expecting 2 to be false', () => {
    expect(OfPrimitiveOrBooleanType(2)).toBe(false);
});

test('NotOfPrimitiveOrBooleanType: Expecting null to be false', () => {
    expect(NotOfPrimitiveOrBooleanType(null)).toBe(false);
});

test('NotOfPrimitiveOrBooleanType: Expecting undefined to be false', () => {
    expect(NotOfPrimitiveOrBooleanType(undefined)).toBe(false);
});

test('NotOfPrimitiveOrBooleanType: Expecting true to be false', () => {
    expect(NotOfPrimitiveOrBooleanType(true)).toBe(false);
});

test('NotOfPrimitiveOrBooleanType: Expecting false to be false', () => {
    expect(NotOfPrimitiveOrBooleanType(false)).toBe(false);
});

test('NotOfPrimitiveOrBooleanType: Expecting null as a string to be true', () => {
    expect(NotOfPrimitiveOrBooleanType('null')).toBe(true);
});

test('NotOfPrimitiveOrBooleanType: Expecting undefined as a string to be true', () => {
    expect(NotOfPrimitiveOrBooleanType('undefined')).toBe(true);
});

test('NotOfPrimitiveOrBooleanType: Expecting true as a string to be true', () => {
    expect(NotOfPrimitiveOrBooleanType('true')).toBe(true);
});

test('NotOfPrimitiveOrBooleanType: Expecting false as a string to be true', () => {
    expect(NotOfPrimitiveOrBooleanType('false')).toBe(true);
});

test('NotOfPrimitiveOrBooleanType: Expecting 2 as a string to be true', () => {
    expect(NotOfPrimitiveOrBooleanType('2')).toBe(true);
});

test('NotOfPrimitiveOrBooleanType: Expecting 2 to be true', () => {
    expect(NotOfPrimitiveOrBooleanType(2)).toBe(true);
});
