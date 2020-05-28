module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  verbose: true,
  roots: [
    './src/components/__tests__',
    './src/components/RadioButton/__tests__',
    './src/actions/__tests__',
    './src/reducers/__tests__',
    './src/data/__tests__',
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|gif|svg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  setupFiles: ['./setupTest'],
};
