import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.adhiyamaan.broucher',
  appName: 'Adhiyamaan Info',
  webDir: 'dist',
  server: {
    url: 'http://10.251.191.5:5173',
    cleartext: true
  }
};

export default config;
