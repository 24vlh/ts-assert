import {NotOfType, OfType} from './of-type';

test('OfType: Expecting string while string will return true', () => {
    expect(OfType('string', 'String')).toBe(true);
});

test('OfType: Expecting number while string will return false', () => {
    expect(OfType('string', 'Number')).toBe(false);
});


test('NotOfType: Expecting string while string will return false', () => {
    expect(NotOfType('string', 'String')).toBe(false);
});

test('NotOfType: Expecting number while string will return true', () => {
    expect(NotOfType('string', 'Number')).toBe(true);
});
