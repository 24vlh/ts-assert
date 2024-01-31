import { OfSymbolType } from './symbol';

test('OfSymbolType: Expecting Symbol() to be true', () => {
  expect(OfSymbolType(Symbol())).toBe(true);
});

test('OfSymbolType: Expecting {} to be false', () => {
  expect(OfSymbolType({})).toBe(false);
});
