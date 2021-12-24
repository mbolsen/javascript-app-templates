module.exports = {
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'frontend/usrc/tils/test-utils/', // a utility folder
    __dirname, // the root directory
  ],
  // ... other options ...
  testEnvironment: 'jest-environment-jsdom',

  // Images and CSS files can't be tested with React testing library, so we alter them.
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/frontend/src/utils/test-utils/__mocks__/imageMocks.js',
    '\\.(css|less)$': '<rootDir>/frontend/src/utils/test-utils/__mocks__/imageMocks.js',
  },
};
