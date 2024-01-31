import { OfNanType } from './nan';

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
