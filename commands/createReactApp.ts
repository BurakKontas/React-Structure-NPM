import { execSync } from 'child_process';

function createReactApp(appName: string) {
    const githubRepoURL = 'https://github.com/BurakKontas/React-Structure';

    try {
        console.log(`Creating React app structure for ${appName}...`);
        execSync(`git clone ${githubRepoURL} ${appName}`);
        console.log('React app structure created successfully!');
    } catch (error) {
        console.error('Error occurred while creating React app structure:', error);
    }
}

export default createReactApp;