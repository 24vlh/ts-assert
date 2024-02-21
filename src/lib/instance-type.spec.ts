import {InstanceOfType, NotInstanceOfType} from './instance-type';

// Test if an object of type String is recognised correctly
test('InstanceOfType: Expecting new String() to be true', () => {
    const myString: String = new String('hello world');
    expect(InstanceOfType(myString, String)).toBe(true);
});

// Test if an object of type Number is recognized as not being of type String
test('InstanceOfType: Expecting 10 to be false', () => {
    const myNumber = 10;
    expect(InstanceOfType(myNumber, String)).toBe(false);
});

// Test if null is recognized as not being of type String
test('InstanceOfType: Expecting null to be false', () => {
    const myNull = null;
    expect(InstanceOfType(myNull, String)).toBe(false);
});

// Test to see if an instance of a custom class is recognised correctly
test('InstanceOfType: Expecting new MyClass() to be true', () => {
    class MyClass {
    }

    const myInstance = new MyClass();

    expect(InstanceOfType(myInstance, MyClass)).toBe(true);
    expect(InstanceOfType(myInstance, String)).toBe(false);
});

// Test if an object of type String is recognised correctly
test('NotInstanceOfType: Expecting String() to be true', () => {
    const myString: String = String('hello world');
    expect(NotInstanceOfType(myString, String)).toBe(true);
});

// Test if an object of type Number is recognized as not being of type String
test('NotInstanceOfType: Expecting 10 to be true', () => {
    const myNumber = 10;
    expect(NotInstanceOfType(myNumber, String)).toBe(true);
});

// Test if null is recognized as not being of type String
test('NotInstanceOfType: Expecting null to be true', () => {
    const myNull = null;
    expect(NotInstanceOfType(myNull, String)).toBe(true);
});

// Test to see if an instance of a custom class is recognised correctly
test('NotInstanceOfType: Expecting new MyClass() to be false', () => {
    class MyClass {
    }

    const myInstance = new MyClass();

    expect(NotInstanceOfType(myInstance, MyClass)).toBe(false);
    expect(NotInstanceOfType(myInstance, String)).toBe(true);
});
