module.exports = {
  "moduleFileExtensions": ["js","jsx"],
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|jpeg|gif|bmp|svg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
  "testMatch": ["<rootDir>/src/js/test/**/*.test.(js|jsx)"],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/js/main/**/*.(js|jsx)",
    "!node_modules/"
  ],
};