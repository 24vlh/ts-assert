import {NotOfObjectType, OfObjectType} from './object';

test('OfObjectType: Expecting {} to be true', () => {
    expect(OfObjectType({})).toBe(true);
});

test('OfObjectType: Expecting new Test() to be true', () => {
    class Test {
    }

    expect(OfObjectType(new Test())).toBe(true);
});

test('OfObjectType: Expecting String to be false', () => {
    expect(OfObjectType(String)).toBe(false);
});

test('OfObjectType: Expecting 2 to be false', () => {
    expect(OfObjectType(2)).toBe(false);
});

test('NotOfObjectType: Expecting {} to be false', () => {
    expect(NotOfObjectType({})).toBe(false);
});

test('NotOfObjectType: Expecting new Test() to be false', () => {
    class Test {
    }

    expect(NotOfObjectType(new Test())).toBe(false);
});

test('NotOfObjectType: Expecting String to be true', () => {
    expect(NotOfObjectType(String)).toBe(true);
});

test('NotOfObjectType: Expecting 2 to be true', () => {
    expect(NotOfObjectType(2)).toBe(true);
});
