import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@heroicons/react/(.*)$": "<rootDir>/node_modules/@heroicons/react/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@heroicons/react|react-loading-skeleton)/)",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
};

export default config;
