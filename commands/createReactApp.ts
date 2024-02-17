import { execSync } from 'child_process';
import * as fs from 'fs';

function createReactApp(appName: string) {
    const githubRepoURL = 'https://github.com/BurakKontas/React-Structure';

    try {
        console.log(`Creating React app structure for ${appName}...`);
        execSync(`git clone ${githubRepoURL} ${appName}`);
        console.log('React app structure created successfully!');

        const gitFolderPath = `${appName}/.git`;
        if (fs.existsSync(gitFolderPath)) {
            fs.rmSync(gitFolderPath, { recursive: true });
        }

        console.log('Installing dependencies with npm...');
        execSync(`npm install`, { cwd: appName });
        console.log('Dependencies installed successfully!');
    } catch (error) {
        console.error('Error occurred while creating React app structure:', error);
    }
}

export default createReactApp;
