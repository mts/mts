module.exports = {
  testMatch: ['**/?(*.)test.js?(x)'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '!**/coverage/**',
    '!**/node_modules/**',
    'packages/**/*.{js,jsx}',
    '!packages/**/index.js',
    '!packages/**/*.props.js',
    '!packages/**/*.render*.js',
    '!packages/**/*.story.js',
    '!packages/**/*.test.js',
    '!packages/**/build/**',
    '!packages/**/node_modules/**',
    '!packages/**/webpack*',
    '!packages/client/**/route/**',
    '!packages/client/**/library/**',
    '!packages/server/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
}
