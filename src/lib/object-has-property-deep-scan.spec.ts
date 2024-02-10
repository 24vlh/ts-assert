import {ObjectHasPropertyDeepScan, ObjectHasPropertyDeepScan2} from './object-has-property-deep-scan';

test('ObjectHasPropertyDeepScan: Expecting key1.key2 in { key1: { key2: 1 } } to be true', () => {
    expect(ObjectHasPropertyDeepScan('key1.key2', {key1: {key2: 1}})).toBe(
        true
    );
});

test('ObjectHasPropertyDeepScan: Expecting key1.key2 in { key1: { key3: 1 } } to be false', () => {
    expect(ObjectHasPropertyDeepScan('key1.key2', {key1: {key3: 1}})).toBe(
        false
    );
});

test('ObjectHasPropertyDeepScan: Expecting key1.key2 in 2 to be false', () => {
    expect(ObjectHasPropertyDeepScan('key1.key2', 2)).toBe(false);
});
test('ObjectHasPropertyDeepScan2: Expecting key1.key2 in { key1: { key2: 1 } } to be true', () => {
    expect(ObjectHasPropertyDeepScan2('key1.key2', {key1: {key2: 1}})).toBe(
        true
    );
});

test('ObjectHasPropertyDeepScan2: Expecting key1.key2 in { key1: { key3: 1 } } to be false', () => {
    expect(ObjectHasPropertyDeepScan2('key1.key2', {key1: {key3: 1}})).toBe(
        false
    );
});

test('ObjectHasPropertyDeepScan2: Expecting key1.key2 in 2 to be false', () => {
    expect(ObjectHasPropertyDeepScan2('key1.key2', 2)).toBe(false);
});
