import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'infusion-fluid-monitoring',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
