import {NotOfPrimitiveTypeAsString, OfPrimitiveTypeAsString} from './primitive-as-string';

test('OfPrimitiveTypeAsString: Expecting null as a string to be true', () => {
    expect(OfPrimitiveTypeAsString('null')).toBe(true);
});

test('OfPrimitiveTypeAsString: Expecting undefined as a string to be true', () => {
    expect(OfPrimitiveTypeAsString('undefined')).toBe(true);
});

test('OfPrimitiveTypeAsString: Expecting null to be false', () => {
    expect(OfPrimitiveTypeAsString(null)).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting undefined to be false', () => {
    expect(OfPrimitiveTypeAsString(undefined)).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting true to be false', () => {
    expect(OfPrimitiveTypeAsString(true)).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting false to be false', () => {
    expect(OfPrimitiveTypeAsString(false)).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting 2 as a string to be false', () => {
    expect(OfPrimitiveTypeAsString('2')).toBe(false);
});

test('OfPrimitiveTypeAsString: Expecting 2 to be false', () => {
    expect(OfPrimitiveTypeAsString(2)).toBe(false);
});

test('NotOfPrimitiveTypeAsString: Expecting null as a string to be false', () => {
    expect(NotOfPrimitiveTypeAsString('null')).toBe(false);
});

test('NotOfPrimitiveTypeAsString: Expecting undefined as a string to be false', () => {
    expect(NotOfPrimitiveTypeAsString('undefined')).toBe(false);
});

test('NotOfPrimitiveTypeAsString: Expecting null to be true', () => {
    expect(NotOfPrimitiveTypeAsString(null)).toBe(true);
});

test('NotOfPrimitiveTypeAsString: Expecting undefined to be true', () => {
    expect(NotOfPrimitiveTypeAsString(undefined)).toBe(true);
});

test('NotOfPrimitiveTypeAsString: Expecting true to be true', () => {
    expect(NotOfPrimitiveTypeAsString(true)).toBe(true);
});

test('NotOfPrimitiveTypeAsString: Expecting false to be true', () => {
    expect(NotOfPrimitiveTypeAsString(false)).toBe(true);
});

test('NotOfPrimitiveTypeAsString: Expecting 2 as a string to be true', () => {
    expect(NotOfPrimitiveTypeAsString('2')).toBe(true);
});

test('NotOfPrimitiveTypeAsString: Expecting 2 to be true', () => {
    expect(NotOfPrimitiveTypeAsString(2)).toBe(true);
});
