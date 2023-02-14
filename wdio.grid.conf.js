exports.config = {

    hostname: "localhost",
    port: 4444,
    path: "/",
    services: [["docker"]],
    
    specs: [
        './test/specs/**/*.js'
    ],

    capabilities: [
        {
            maxInstances: 1,
            browserName: "chrome",
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: [
                    '--window-size=1440,735'
                ],
            }
        },
        {
            maxInstances: 1,
            browserName: "firefox",
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
                args: [
                    '--window-size=1440,735'
                ],
        },
        }
    ],
    waitforTimeout: 8000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 100000
    },
}