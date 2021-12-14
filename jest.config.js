module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '.(ts|tsx|js|jsx)$': 'ts-jest/dist',
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/../../tsconfig.jest.json',
        },
    },
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/../test-utils/src/mocks/fileMock.ts',
        '\\.(css|less|sass|scss)$':
            '<rootDir>/../test-utils/src/mocks/styleMock.ts',
    },
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        'src/**/*Props.{js, jsx, ts, tsx}',
        '!src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '!src/pages/*.{js, jsx, ts, tsx}',
        '!src/**/*.d.ts',
    ],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
    coverageReporters: ['lcov', 'text-summary'],
};
