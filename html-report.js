const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/json",
  reportPath: "./cypress/reports/html",
  metadata: {
    browser: {
      name: "chrome",
      version: "119.0.6045.124",
    },
    device: "Local test machine",
    platform: {
      name: "Laptop",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Bellagio project" },
      { label: "Release", value: "1.2.3" },
      { label: "Execution Start Time", value: "May 25th 2023, 02:31 PM IST" },
      { label: "Execution End Time", value: "May 25th 2023, 02:56 PM IST" },
    ],
  },
});