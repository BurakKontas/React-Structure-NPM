"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const child_process_1 = require("child_process");
function createService(serviceName) {
    const capitalizedStoreName = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
    const destServiceDir = path.join('./src/redux', capitalizedStoreName);
    const githubRepoURL = 'https://github.com/BurakKontas/React-Structure-Service';
    // Belirtilen klasörün varlığını kontrol et
    if (fs.existsSync(destServiceDir)) {
        console.error(`${capitalizedStoreName} service already exists in ${destServiceDir}.`);
        process.exit(1);
    }
    try {
        (0, child_process_1.execSync)(`git clone ${githubRepoURL} ${destServiceDir}`);
        const files = fs.readdirSync(destServiceDir);
        files.forEach((file) => {
            const filePath = path.join(destServiceDir, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                // Dizinleri işlemeyin
                return;
            }
            const newFileName = file.replace(/counter/g, serviceName);
            const newFilePath = path.join(destServiceDir, newFileName);
            fs.renameSync(filePath, newFilePath);
            let content = fs.readFileSync(newFilePath, 'utf-8');
            content = content.replace(/counter/g, serviceName)
                .replace(/Counter/g, capitalizedStoreName);
            fs.writeFileSync(newFilePath, content, 'utf-8');
        });
        console.log(`${capitalizedStoreName} service created successfully in ${destServiceDir}.`);
    }
    catch (error) {
        console.error('Error occurred while creating Service structure:', error);
    }
}
exports.default = createService;
