// based on https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  fakeTimers: {"enableGlobally": true},
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
}