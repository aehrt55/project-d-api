/* eslint-disable import/no-commonjs */

module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/port.js',
    '!src/redisConfig.js',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '.+\\.spec\\.js$',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
}
