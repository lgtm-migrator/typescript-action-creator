module.exports = {
    testRegex: '\\.spec\\.(ts|js)$',
    testEnvironment: 'node',
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.d.ts',
    ],
};
