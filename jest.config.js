/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/src/"],
  globals: { "ts-jest": { tsconfig: "./tsconfig.cf.json" } },
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
};
