import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

function createComponent(componentName: string) {
    const capitalizedComponentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const destComponentsDir = path.join('./src/components', capitalizedComponentName);
    const githubRepoURL = 'https://github.com/BurakKontas/React-Structure-Component';

    // Belirtilen klasörün varlığını kontrol et
    if (fs.existsSync(destComponentsDir)) {
        console.error(`${capitalizedComponentName} component already exists in ${destComponentsDir}.`);
        process.exit(1);
    }

    try {
        execSync(`git clone ${githubRepoURL} ${destComponentsDir}`);

        const files = fs.readdirSync(destComponentsDir);
        files.forEach((file) => {
            const filePath = path.join(destComponentsDir, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                // Dizinleri işlemeyin
                return;
            }
            const newFileName = file.replace(/custombutton/g, componentName);
            const newFilePath = path.join(destComponentsDir, newFileName);

            fs.renameSync(filePath, newFilePath);

            let content = fs.readFileSync(newFilePath, 'utf-8');
            content = content.replace(/custombutton/g, componentName)
                .replace(/CustomButton/g, capitalizedComponentName);
            fs.writeFileSync(newFilePath, content, 'utf-8');
        });

        const gitFolderPath = path.join(destComponentsDir, '.git');
        if (fs.existsSync(gitFolderPath)) {
            fs.rmSync(gitFolderPath, { recursive: true });
        }

        console.log(`${capitalizedComponentName} component created successfully in ${destComponentsDir}.`);
    } catch (error) {
        console.error('Error occurred while creating React app structure:', error);
    }
}

export default createComponent;