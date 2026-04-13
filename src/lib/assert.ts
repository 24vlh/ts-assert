import { OfStringType } from './string';

/**
 * Asserts a truthy condition and throws on failure.
 *
 * @param {unknown} condition - Condition to assert.
 * @param {string} [message] - Optional failure message.
 */
export const Assert = (
  condition: unknown,
  message = 'Assertion failed.'
): asserts condition => {
  if (!condition) {
    throw new Error(message);
  }
};

/**
 * Asserts that a value is not null or undefined.
 *
 * @template T
 * @param {T} value - Value to assert.
 * @param {string} [message] - Optional failure message.
 */
export const AssertDefined = <T>(
  value: T,
  message = 'Expected value to be defined.'
): asserts value is NonNullable<T> => {
  if (value === null || value === undefined) {
    throw new Error(message);
  }
};

/**
 * Asserts that a value is a non-empty string.
 *
 * @param {unknown} value - Value to assert.
 * @param {string} [message] - Optional failure message.
 */
export const AssertNonEmptyString = (
  value: unknown,
  message = 'Expected a non-empty string.'
): asserts value is string => {
  if (!OfStringType(value) || value.trim().length === 0) {
    throw new Error(message);
  }
};
