import {NotOfNanType, OfNanType} from './nan';

test('OfNanType: Expecting NaN to be true', () => {
    expect(OfNanType(NaN)).toBe(true);
});

test('OfNanType: Expecting parseFloat(abc) to be true', () => {
    expect(OfNanType(parseFloat('xys'))).toBe(true);
});

test('OfNanType: Expecting Math.sqrt(-1) to be true', () => {
    expect(OfNanType(Math.sqrt(-1))).toBe(true);
});

test('OfNanType: Expecting 2 to be false', () => {
    expect(OfNanType(2)).toBe(false);
});

test('NotOfNanType: Expecting NaN to be false', () => {
    expect(NotOfNanType(NaN)).toBe(false);
});

test('NotOfNanType: Expecting parseFloat(abc) to be false', () => {
    expect(NotOfNanType(parseFloat('xys'))).toBe(false);
});

test('NotOfNanType: Expecting Math.sqrt(-1) to be false', () => {
    expect(NotOfNanType(Math.sqrt(-1))).toBe(false);
});

test('NotOfNanType: Expecting 2 to be true', () => {
    expect(NotOfNanType(2)).toBe(true);
});
