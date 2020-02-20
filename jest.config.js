module.exports = {
  testMatch: ['**/?(*.)test.js?(x)'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(gql|graphql)$': 'jest-transform-graphql',
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
    '!packages/**/src/data/**',
    '!packages/**/src/mts/**',
    '!packages/**/node_modules/**',
    '!packages/**/webpack*',
    '!packages/http-server/**',
    '!packages/library/**/client/startup.js',
    '!packages/library/**/server/processSass.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/packages/client/src/mock/file.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx'],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 70,
      functions: 82,
      lines: 85,
    },
  },
}
