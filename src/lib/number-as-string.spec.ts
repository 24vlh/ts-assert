import {NotOfNumberTypeAsString, OfNumberTypeAsString} from './number-as-string';

test('OfNumberTypeAsString: Expecting 2 as a string to be true', () => {
    expect(OfNumberTypeAsString('2')).toBe(true);
});

test('OfNumberTypeAsString: Expecting 2.14 as a string to be true', () => {
    expect(OfNumberTypeAsString('2.14')).toBe(true);
});

test('OfNumberTypeAsString: Expecting 2 to be false', () => {
    expect(OfNumberTypeAsString(2)).toBe(false);
});

test('OfNumberTypeAsString: Expecting 2.14 to be false', () => {
    expect(OfNumberTypeAsString(2.14)).toBe(false);
});

test('OfNumberTypeAsString: Expecting true to be false', () => {
    expect(OfNumberTypeAsString(true)).toBe(false);
});

test('OfNumberTypeAsString: Expecting {} to be false', () => {
    expect(OfNumberTypeAsString({})).toBe(false);
});

test('NotOfNumberTypeAsString: Expecting 2 as a string to be false', () => {
    expect(NotOfNumberTypeAsString('2')).toBe(false);
});

test('NotOfNumberTypeAsString: Expecting 2.14 as a string to be false', () => {
    expect(NotOfNumberTypeAsString('2.14')).toBe(false);
});

test('NotOfNumberTypeAsString: Expecting 2 to be true', () => {
    expect(NotOfNumberTypeAsString(2)).toBe(true);
});

test('NotOfNumberTypeAsString: Expecting 2.14 to be true', () => {
    expect(NotOfNumberTypeAsString(2.14)).toBe(true);
});

test('NotOfNumberTypeAsString: Expecting true to be true', () => {
    expect(NotOfNumberTypeAsString(true)).toBe(true);
});

test('NotOfNumberTypeAsString: Expecting {} to be true', () => {
    expect(NotOfNumberTypeAsString({})).toBe(true);
});
