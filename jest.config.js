module.exports = {
    testEnvironment: 'jsdom',
    rootDir: '.',
    modulePath: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/setupJest.js']
}