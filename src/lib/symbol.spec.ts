import {NotOfSymbolType, OfSymbolType} from './symbol';

test('OfSymbolType: Expecting Symbol() to be true', () => {
    expect(OfSymbolType(Symbol())).toBe(true);
});

test('OfSymbolType: Expecting {} to be false', () => {
    expect(OfSymbolType({})).toBe(false);
});

test('NotOfSymbolType: Expecting Symbol() to be false', () => {
    expect(NotOfSymbolType(Symbol())).toBe(false);
});

test('NotOfSymbolType: Expecting {} to be true', () => {
    expect(NotOfSymbolType({})).toBe(true);
});
