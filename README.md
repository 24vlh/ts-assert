# Typescript assertions

Lightweight typescript type assertion library.

## Installation

```bash
npm i --save @24vlh/ts-assert
```

## Usage

```ts
import {OfArrayType} from '@24vlh/ts-assert/array';

const array = ['a', 'b', 'c'];

if (OfArrayType<string>(array)) {
    // do something with the array
}
```

## List of helpers

### Types
- TypeofValues
- ObjectTypeValues

### Helpers
- ReturnConstructor

### Assertion helpers
- OfArrayType
- ArrayOfGivenTypeClass
- ArrayOfGivenTypePrimitive
- OfBooleanType
- OfBooleanTypeAsString
- EmptyArray
- NotEmptyArray
- EmptyObject
- NotEmptyObject
- EmptyString
- NotEmptyString
- OfFalseType
- OfFalseTypeAsString
- OfFloatType
- OfFunctionType
- OfIntegerType
- OfNanType
- OfNullType
- OfNullTypeAsString
- OfNumberType
- OfNumberTypeAsString
- OfNumericType
- OfObjectType
- ObjectHasOwnProperty
- ObjectHasProperty
- ObjectHasPropertyDeepScan
- OfType
- OfPrimitiveType
- OfPrimitiveTypeAsString
- OfPrimitiveOrBooleanType
- OfPrimitiveOrBooleanTypeAsString
- OfStringType
- OfSymbolType
- OfTrueType
- OfTrueTypeAsString
- OfUndefinedType
- OfUndefinedTypeAsString

@vlah.io
