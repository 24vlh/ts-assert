import { InstanceOfType } from './instance-type';

describe('InstanceOfType function', () => {
  // Test if an object of type String is recognised correctly
  it('Should return true for instances of the right type', () => {
    const myString: String = new String('hello world');
    expect(InstanceOfType(myString, String)).toBeTruthy();
  });

  // Test if an object of type Number is recognized as not being of type String
  it('Should return false for instances of the wrong type', () => {
    const myNumber = 10;
    expect(InstanceOfType(myNumber, String)).toBeFalsy();
  });

  // Test if null is recognized as not being of type String
  it('Should return false when provided with null', () => {
    const myNull = null;
    expect(InstanceOfType(myNull, String)).toBeFalsy();
  });

  // Test to see if an instance of a custom class is recognised correctly
  it('Should correctly test instances of a custom class', () => {
    class MyClass {}

    const myInstance = new MyClass();

    expect(InstanceOfType(myInstance, MyClass)).toBeTruthy();
    expect(InstanceOfType(myInstance, String)).toBeFalsy();
  });
});
