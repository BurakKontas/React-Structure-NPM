"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function createReactApp(appName) {
    const githubRepoURL = 'https://github.com/BurakKontas/React-Structure';
    try {
        console.log(`Creating React app structure for ${appName}...`);
        (0, child_process_1.execSync)(`git clone ${githubRepoURL} ${appName}`);
        console.log('React app structure created successfully!');
    }
    catch (error) {
        console.error('Error occurred while creating React app structure:', error);
    }
}
exports.default = createReactApp;
