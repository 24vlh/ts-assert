import {NotOfStringType, OfStringType} from './string';

test('OfStringType: Expecting test to be true', () => {
    expect(OfStringType('test')).toBe(true);
});

test('OfStringType: Expecting JSON.stringify({}) to be true', () => {
    expect(OfStringType(JSON.stringify({}))).toBe(true);
});

test('OfStringType: Expecting (1).toString() to be true', () => {
    expect(OfStringType((1).toString())).toBe(true);
});

test('OfStringType: Expecting 1 to be false', () => {
    expect(OfStringType(1)).toBe(false);
});

test('OfStringType: Expecting {} to be false', () => {
    expect(OfStringType({})).toBe(false);
});

test('NotOfStringType: Expecting test to be false', () => {
    expect(NotOfStringType('test')).toBe(false);
});

test('NotOfStringType: Expecting JSON.stringify({}) to be false', () => {
    expect(NotOfStringType(JSON.stringify({}))).toBe(false);
});

test('NotOfStringType: Expecting (1).toString() to be false', () => {
    expect(NotOfStringType((1).toString())).toBe(false);
});

test('NotOfStringType: Expecting 1 to be true', () => {
    expect(NotOfStringType(1)).toBe(true);
});

test('NotOfStringType: Expecting {} to be true', () => {
    expect(NotOfStringType({})).toBe(true);
});
