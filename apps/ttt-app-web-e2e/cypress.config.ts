import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        ...nxE2EPreset(__filename, {
            cypressDir: 'src',
            bundler: 'vite',
            webServerCommands: {
                default: 'npx nx run ttt-app-web:dev',
                production: 'npx nx run ttt-app-web:dev',
            },
            ciWebServerCommand: 'npx nx run ttt-app-web:dev',
            ciBaseUrl: 'http://localhost:4200',
        }),
        baseUrl: 'http://localhost:4200',
    },
});
