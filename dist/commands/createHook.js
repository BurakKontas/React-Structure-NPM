"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const child_process_1 = require("child_process");
function createHook(hookName) {
    if (!hookName.startsWith('use'))
        hookName = `use${hookName.charAt(0).toUpperCase()}${hookName.slice(1)}`;
    const destHooksDir = path.join('./src/hooks', hookName);
    const githubRepoURL = 'https://github.com/BurakKontas/React-Structure-Hook';
    // Belirtilen klasörün varlığını kontrol et
    if (fs.existsSync(destHooksDir)) {
        console.error(`${hookName} hook already exists in ${destHooksDir}.`);
        process.exit(1);
    }
    try {
        (0, child_process_1.execSync)(`git clone ${githubRepoURL} ${destHooksDir}`);
        const files = fs.readdirSync(destHooksDir);
        files.forEach((file) => {
            const filePath = path.join(destHooksDir, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                // Dizinleri işlemeyin
                return;
            }
            const newFileName = file.replace(/counter/g, hookName.split("use")[1].toLowerCase())
                .replace(/Counter/g, hookName.split("use")[1].charAt(0).toUpperCase() + hookName.split("use")[1].slice(1));
            const newFilePath = path.join(destHooksDir, newFileName);
            fs.renameSync(filePath, newFilePath);
            let content = fs.readFileSync(newFilePath, 'utf-8');
            content = content.replace(/counter/g, hookName.split("use")[1].toLowerCase());
            content = content.replace(/Counter/g, hookName.split("use")[1].charAt(0).toUpperCase() + hookName.split("use")[1].slice(1));
            fs.writeFileSync(newFilePath, content, 'utf-8');
        });
        const gitFolderPath = path.join(destHooksDir, '.git');
        if (fs.existsSync(gitFolderPath)) {
            fs.rmSync(gitFolderPath, { recursive: true });
        }
        console.log(`${hookName} hook created successfully in ${destHooksDir}.`);
    }
    catch (error) {
        console.error('Error occurred while creating React app structure:', error);
    }
}
exports.default = createHook;
