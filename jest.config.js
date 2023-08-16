process.env.TZ = process.env.TZ || "UTC";

const config = {
  verbose: true,
  clearMocks: true,
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg|svg|png)$": "<rootDir>/src/test/__mocks__/staticAssetsImportMock.js",
  },
  setupFiles: ["<rootDir>/src/test/init.ts"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules/(?!(nanoid)/)"],
};

module.exports = config;
