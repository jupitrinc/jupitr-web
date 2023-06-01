// jest.config.js
const nextJest = require("next/jest")

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/",
    "helper/(.*)$": "<rootDir>/helper/$1",
  },
  testEnvironment: "jest-environment-jsdom",
}

module.exports = createJestConfig(customJestConfig)
