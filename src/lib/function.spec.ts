import {OfFunctionType, OfFunctionType2} from './function';

test('OfFunctionType: Expecting () => true to be true', () => {
    expect(OfFunctionType(() => true)).toBe(true);
});

test('OfFunctionType: Expecting function tes(): void {} to be true', () => {
    expect(OfFunctionType(function tes(): void {
    })).toBe(true);
});

test('OfFunctionType: Expecting String to be true', () => {
    expect(OfFunctionType(String)).toBe(true);
});

test('OfFunctionType: Expecting 2 to be false', () => {
    expect(OfFunctionType('2')).toBe(false);
});

test('OfFunctionType: Expecting true to be false', () => {
    expect(OfFunctionType(true)).toBe(false);
});

test('OfFunctionType: Expecting {} to be false', () => {
    expect(OfFunctionType({})).toBe(false);
});

test('OfFunctionType2: Expecting () => true to be true', () => {
    expect(OfFunctionType2(() => true)).toBe(true);
});

test('OfFunctionType2: Expecting function tes(): void {} to be true', () => {
    expect(OfFunctionType2(function tes(): void {
    })).toBe(true);
});

test('OfFunctionType2: Expecting String to be false', () => {
    expect(OfFunctionType2(String)).toBe(true);
});

test('OfFunctionType2: Expecting 2 to be false', () => {
    expect(OfFunctionType2('2')).toBe(false);
});

test('OfFunctionType2: Expecting true to be false', () => {
    expect(OfFunctionType2(true)).toBe(false);
});

test('OfFunctionType2: Expecting {} to be false', () => {
    expect(OfFunctionType2({})).toBe(false);
});
