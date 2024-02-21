import {NotOfUndefinedTypeAsString, OfUndefinedTypeAsString} from './undefined-as-string';

test('OfUndefinedTypeAsString: Expecting undefined as string to be true', () => {
    expect(OfUndefinedTypeAsString('undefined')).toBe(true);
});

test('OfUndefinedTypeAsString: Expecting undefined to be false', () => {
    const obj: any = {};
    expect(OfUndefinedTypeAsString(obj.test)).toBe(false);
});

test('OfUndefinedTypeAsString: Expecting 2.14 to be false', () => {
    expect(OfUndefinedTypeAsString(2.14)).toBe(false);
});

test('OfUndefinedTypeAsString: Expecting undefined to be false', () => {
    expect(OfUndefinedTypeAsString(undefined)).toBe(false);
});

test('OfUndefinedTypeAsString: Expecting 2 as a string to be false', () => {
    expect(OfUndefinedTypeAsString('2')).toBe(false);
});

test('OfUndefinedTypeAsString: Expecting true to be false', () => {
    expect(OfUndefinedTypeAsString(true)).toBe(false);
});

test('OfUndefinedTypeAsString: Expecting {} to be false', () => {
    expect(OfUndefinedTypeAsString({})).toBe(false);
});

test('NotOfUndefinedTypeAsString: Expecting undefined as string to be false', () => {
    expect(NotOfUndefinedTypeAsString('undefined')).toBe(false);
});

test('NotOfUndefinedTypeAsString: Expecting undefined to be true', () => {
    const obj: any = {};
    expect(NotOfUndefinedTypeAsString(obj.test)).toBe(true);
});

test('NotOfUndefinedTypeAsString: Expecting 2.14 to be true', () => {
    expect(NotOfUndefinedTypeAsString(2.14)).toBe(true);
});

test('NotOfUndefinedTypeAsString: Expecting undefined to be true', () => {
    expect(NotOfUndefinedTypeAsString(undefined)).toBe(true);
});

test('NotOfUndefinedTypeAsString: Expecting 2 as a string to be true', () => {
    expect(NotOfUndefinedTypeAsString('2')).toBe(true);
});

test('NotOfUndefinedTypeAsString: Expecting true to be true', () => {
    expect(NotOfUndefinedTypeAsString(true)).toBe(true);
});

test('NotOfUndefinedTypeAsString: Expecting {} to be true', () => {
    expect(NotOfUndefinedTypeAsString({})).toBe(true);
});
