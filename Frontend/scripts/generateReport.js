// generateReport.js
const fs = require('fs');
const path = require('path');

const generatePerformanceReport = () => {
    const reportData = {
        timestamp: new Date().toISOString(),
        cpuUsage: process.cpuUsage(),
        memoryUsage: process.memoryUsage(),
    };

    const reportPath = path.join(__dirname, 'reports', 'performanceReport.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));

    console.log("Performance report generated.");
};

generatePerformanceReport();
