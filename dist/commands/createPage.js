"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const child_process_1 = require("child_process");
function createPage(pageName) {
    const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    const destPagesDir = path.join('./src/pages', capitalizedPageName);
    const githubRepoURL = 'https://github.com/BurakKontas/React-Structure-Page';
    // Belirtilen klasörün varlığını kontrol et
    if (fs.existsSync(destPagesDir)) {
        console.error(`${capitalizedPageName} page already exists in ${destPagesDir}.`);
        process.exit(1);
    }
    try {
        (0, child_process_1.execSync)(`git clone ${githubRepoURL} ${destPagesDir}`);
        const files = fs.readdirSync(destPagesDir);
        files.forEach((file) => {
            const filePath = path.join(destPagesDir, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                // Dizinleri işlemeyin
                return;
            }
            const newFileName = file.replace(/Homepage/g, capitalizedPageName);
            const newFilePath = path.join(destPagesDir, newFileName);
            fs.renameSync(filePath, newFilePath);
            let content = fs.readFileSync(newFilePath, 'utf-8');
            content = content.replace(/Homepage/g, capitalizedPageName);
            fs.writeFileSync(newFilePath, content, 'utf-8');
        });
        const gitFolderPath = path.join(destPagesDir, '.git');
        if (fs.existsSync(gitFolderPath)) {
            fs.rmSync(gitFolderPath, { recursive: true });
        }
        console.log(`${capitalizedPageName} page created successfully in ${destPagesDir}.`);
    }
    catch (error) {
        console.error('Error occurred while creating React app structure:', error);
    }
}
exports.default = createPage;
