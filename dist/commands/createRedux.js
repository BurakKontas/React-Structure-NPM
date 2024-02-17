"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const child_process_1 = require("child_process");
function createRedux(storeName) {
    const capitalizedStoreName = storeName.charAt(0).toUpperCase() + storeName.slice(1);
    const destReduxDir = path.join('./src/service', capitalizedStoreName);
    const githubRepoURL = 'https://github.com/BurakKontas/React-Structure-Redux';
    // Belirtilen klasörün varlığını kontrol et
    if (fs.existsSync(destReduxDir)) {
        console.error(`${capitalizedStoreName} store already exists in ${destReduxDir}.`);
        process.exit(1);
    }
    try {
        (0, child_process_1.execSync)(`git clone ${githubRepoURL} ${destReduxDir}`);
        const files = fs.readdirSync(destReduxDir);
        files.forEach((file) => {
            const filePath = path.join(destReduxDir, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                // Dizinleri işlemeyin
                return;
            }
            const newFileName = file.replace(/counter/g, storeName);
            const newFilePath = path.join(destReduxDir, newFileName);
            fs.renameSync(filePath, newFilePath);
            let content = fs.readFileSync(newFilePath, 'utf-8');
            content = content.replace(/counter/g, storeName)
                .replace(/Counter/g, capitalizedStoreName);
            fs.writeFileSync(newFilePath, content, 'utf-8');
        });
        console.log(`${capitalizedStoreName} store created successfully in ${destReduxDir}.`);
    }
    catch (error) {
        console.error('Error occurred while creating Redux structure:', error);
    }
}
exports.default = createRedux;
