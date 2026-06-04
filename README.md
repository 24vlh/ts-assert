# Typescript assertions

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

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

- Assert
- AssertDefined
- AssertNonEmptyString
- OfArrayType
- ArrayOfGivenTypeClass
- ArrayOfGivenTypePrimitive
- OfBooleanType
- OfBooleanTypeAsString
- EmptyArray
- EmptyObject
- EmptyString
- OfFalseType
- OfFalseTypeAsString
- OfFloatType
- OfFunctionType
- OfFunctionType2
- OfImmutablePrimitiveType
- InstanceOfType
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
- ObjectOfType
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
