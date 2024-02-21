import {NotOfNullTypeAsString, OfNullTypeAsString} from './null-as-string';

test('OfNullTypeAsString: Expecting null as a string to be true', () => {
    expect(OfNullTypeAsString('null')).toBe(true);
});

test('OfNullTypeAsString: Expecting null to be false', () => {
    expect(OfNullTypeAsString(null)).toBe(false);
});

test('OfNullTypeAsString: Expecting 2.14 to be false', () => {
    expect(OfNullTypeAsString(2.14)).toBe(false);
});

test('OfNullTypeAsString: Expecting 2 as a string to be false', () => {
    expect(OfNullTypeAsString('2')).toBe(false);
});

test('OfNullTypeAsString: Expecting true to be false', () => {
    expect(OfNullTypeAsString(true)).toBe(false);
});

test('OfNullTypeAsString: Expecting {} to be false', () => {
    expect(OfNullTypeAsString({})).toBe(false);
});

test('NotOfNullTypeAsString: Expecting null as a string to be false', () => {
    expect(NotOfNullTypeAsString('null')).toBe(false);
});

test('NotOfNullTypeAsString: Expecting null to be true', () => {
    expect(NotOfNullTypeAsString(null)).toBe(true);
});

test('NotOfNullTypeAsString: Expecting 2.14 to be true', () => {
    expect(NotOfNullTypeAsString(2.14)).toBe(true);
});

test('NotOfNullTypeAsString: Expecting 2 as a string to be true', () => {
    expect(NotOfNullTypeAsString('2')).toBe(true);
});

test('NotOfNullTypeAsString: Expecting true to be true', () => {
    expect(NotOfNullTypeAsString(true)).toBe(true);
});

test('NotOfNullTypeAsString: Expecting {} to be true', () => {
    expect(NotOfNullTypeAsString({})).toBe(true);
});
