import {NotOfPrimitiveOrBooleanTypeAsString, OfPrimitiveOrBooleanTypeAsString} from './primitive-or-boolean-as-string';

test('OfPrimitiveOrBooleanTypeAsString: Expecting null as string to be true', () => {
    expect(OfPrimitiveOrBooleanTypeAsString('null')).toBe(true);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting undefined as string to be true', () => {
    expect(OfPrimitiveOrBooleanTypeAsString('undefined')).toBe(true);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting true as string to be true', () => {
    expect(OfPrimitiveOrBooleanTypeAsString('true')).toBe(true);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting false as string to be true', () => {
    expect(OfPrimitiveOrBooleanTypeAsString('false')).toBe(true);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting null to be false', () => {
    expect(OfPrimitiveOrBooleanTypeAsString(null)).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting undefined to be false', () => {
    expect(OfPrimitiveOrBooleanTypeAsString(undefined)).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting true to be false', () => {
    expect(OfPrimitiveOrBooleanTypeAsString(true)).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting false to be false', () => {
    expect(OfPrimitiveOrBooleanTypeAsString(false)).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting 2 as a string to be false', () => {
    expect(OfPrimitiveOrBooleanTypeAsString('2')).toBe(false);
});

test('OfPrimitiveOrBooleanTypeAsString: Expecting 2 to be false', () => {
    expect(OfPrimitiveOrBooleanTypeAsString(2)).toBe(false);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting null as string to be false', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString('null')).toBe(false);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting undefined as string to be false', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString('undefined')).toBe(false);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting true as string to be false', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString('true')).toBe(false);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting false as string to be false', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString('false')).toBe(false);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting null to be true', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString(null)).toBe(true);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting undefined to be true', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString(undefined)).toBe(true);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting true to be true', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString(true)).toBe(true);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting false to be true', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString(false)).toBe(true);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting 2 as a string to be true', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString('2')).toBe(true);
});

test('NotOfPrimitiveOrBooleanTypeAsString: Expecting 2 to be true', () => {
    expect(NotOfPrimitiveOrBooleanTypeAsString(2)).toBe(true);
});
