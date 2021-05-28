import '@jest/types'
import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest/utils'
import tsjPreset from 'ts-jest/presets'

export default {
  bail: true,

  clearMocks: true,

  coverageProvider: 'v8',

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' }),

  preset: 'ts-jest',

  testEnvironment: 'node',

  testMatch: [
    '<rootDir>/src/**/*.spec.ts'
  ],

  transform: {
    // '.+\\.ts$': 'ts-jest',
    ...tsjPreset.defaults.transform
  },

  testPathIgnorePatterns: [
    '/node_modules/'
  ],

  transformIgnorePatterns: [
    '/node_modules/'

  ]

}
