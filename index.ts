import dotenv from "dotenv"

let reporter = require('cucumber-html-reporter');
dotenv.config({
    path: `${process.cwd()}/config/.env.${process.env.npm_config_env}`
});

let options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber_report.json',
        output: 'reports/cucumber_bootstrap_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App URL": process.env.app_url,
            // "Test Environment": "STAGING",
            "Browser": process.env.browser,
            // "Platform": "Windows 10",
            // "Parallel": "Scenarios",
            // "Executed": "Remote"
        },
        failedSummaryReport: true,
        screenshotsDirectory: 'reports/screenshots/',
        storeScreenshots: true
    };

    reporter.generate(options);