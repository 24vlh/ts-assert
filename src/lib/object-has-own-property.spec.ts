import {ObjectHasNotOwnProperty, ObjectHasOwnProperty} from './object-has-own-property';

test('ObjectHasOwnProperty: Expecting key in { key: 1 } to be true', () => {
    expect(ObjectHasOwnProperty('key', {key: 1})).toBe(true);
});

test('ObjectHasOwnProperty: Expecting key in { key2: 1 } to be false', () => {
    expect(ObjectHasOwnProperty('key', {key2: 1})).toBe(false);
});

test('ObjectHasOwnProperty: Expecting key in 2 to be false', () => {
    expect(ObjectHasOwnProperty('key', 2)).toBe(false);
});

test('ObjectHasNotOwnProperty: Expecting key in { key: 1 } to be false', () => {
    expect(ObjectHasNotOwnProperty('key', {key: 1})).toBe(false);
});

test('ObjectHasNotOwnProperty: Expecting key in { key2: 1 } to be true', () => {
    expect(ObjectHasNotOwnProperty('key', {key2: 1})).toBe(true);
});

test('ObjectHasNotOwnProperty: Expecting key in 2 to be true', () => {
    expect(ObjectHasNotOwnProperty('key', 2)).toBe(true);
});
