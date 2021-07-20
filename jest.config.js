module.exports = {
  preset: 'ts-jest',
  verbose: false,
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!<rootDir>/src/mocks/*.ts',
    '!<rootDir>/src/types.ts',
    '!<rootDir>/.*.ts',
    '!<rootDir>/*.ts',
    '!<rootDir>/.*.js',
    '!<rootDir>/*.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/node_modules/**',
  ],
}
