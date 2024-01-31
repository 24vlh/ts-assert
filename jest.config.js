'use strict';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        isolatedModules: true
      }
    ]
  },
  maxWorkers: 2
};
