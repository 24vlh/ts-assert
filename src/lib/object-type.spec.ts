import { ObjectOfType } from './object-type';

describe('ObjectOfType function', () => {
  it('should return true when all required keys are present', () => {
    const obj = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    };
    const keys = ['key1', 'key2', 'key3'];
    const result = ObjectOfType(obj, keys);
    expect(result).toBe(true);
  });

  it('should return false when some required keys are missing', () => {
    const obj = {
      key1: 'value1',
      key2: 'value2'
    };
    const keys = ['key1', 'key2', 'key3'];
    const result = ObjectOfType(obj, keys);
    expect(result).toBe(false);
  });

  it('should return false when argument is not an object', () => {
    const obj = 'not an object';
    const keys = ['key1', 'key2', 'key3'];
    const result = ObjectOfType(obj, keys);
    expect(result).toBe(false);
  });
});
