import {ArrayOfGivenTypeClass, NotArrayOfGivenTypeClass} from './array-type-class';

// Defining simple type classes
class TypeClass1 {
}

class TypeClass2 {
}

const testData: [unknown, new (...args: never[]) => any, boolean][] = [
    [[new TypeClass1(), new TypeClass1()], TypeClass1, false],
    [[new TypeClass1(), new TypeClass2()], TypeClass1, true],
    [[], TypeClass1, true],
    ['not an array', TypeClass1, true]
];

describe('ArrayOfGivenTypeClass', () => {
    test.each(testData)(
        'NotArrayOfGivenTypeClass: Expecting array of %p to be %p',
        (inputValue: unknown, expectedTypeClass: new (...args: never[]) => any, expectedOutput: boolean) => {
            expect(ArrayOfGivenTypeClass(inputValue, expectedTypeClass)).toBe(!expectedOutput);
        }
    );
});

describe('NotArrayOfGivenTypeClass', () => {
    test.each(testData)(
        'NotArrayOfGivenTypeClass: Expecting array of %p to be %p',
        (inputValue: unknown, expectedTypeClass: new (...args: never[]) => any, expectedOutput: boolean) => {
            expect(NotArrayOfGivenTypeClass(inputValue, expectedTypeClass)).toBe(expectedOutput);
        }
    );
});
