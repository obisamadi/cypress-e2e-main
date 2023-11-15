const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "jsonlogs", // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "119.0.6045.124",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
});