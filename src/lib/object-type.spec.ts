import {NotObjectOfType, ObjectOfType} from './object-type';

test('ObjectOfType: Expecting object and matching keys to return true', () => {
    expect(ObjectOfType({
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        },
        ['key1', 'key2', 'key3']
    )).toBe(true);
});

test('ObjectOfType: Expecting object with not matching keys to return false', () => {
    expect(ObjectOfType({
            key1: 'value1',
            key2: 'value2'
        },
        ['key1', 'key2', 'key3']
    )).toBe(false);
});

test('ObjectOfType: Expecting string and random keys to return false', () => {
    expect(ObjectOfType(
        'not an object',
        ['key1', 'key2', 'key3']
    )).toBe(false);
});

test('NotObjectOfType: Expecting object and matching keys to return false', () => {
    expect(NotObjectOfType({
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        },
        ['key1', 'key2', 'key3']
    )).toBe(false);
});

test('NotObjectOfType: Expecting object with not matching keys to return true', () => {
    expect(NotObjectOfType({
            key1: 'value1',
            key2: 'value2'
        },
        ['key1', 'key2', 'key3']
    )).toBe(true);
});

test('NotObjectOfType: Expecting string and random keys to return true', () => {
    expect(NotObjectOfType(
        'not an object',
        ['key1', 'key2', 'key3']
    )).toBe(true);
});
