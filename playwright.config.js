// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 3000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 0,  
    headless: false,
    //viewport: { width: 800, height: 900 },
    //browserName: 'chromium',
    ignoreHTTPSErrors: false,
    screenshot: 'on', //off, on, only-on-failure despues de falla 
    video: 'on', 
    // 'off'- No grabar video.
    // 'on'- Grabar video para cada prueba.
    // 'retain-on-failure'- Grabe video para cada prueba, pero elimine todos los videos de las ejecuciones de prueba exitosas.
    // 'on-first-retry'- Grabe video solo cuando vuelva a intentar una prueba por primera vez.
    trace: 'on',
    // 'off'- No registrar rastro.
    // 'on'- Registro de seguimiento para cada prueba.
    // 'retain-on-failure'- Registre el seguimiento de cada prueba, pero elimínelo de las ejecuciones de prueba exitosas.
    // 'on-first-retry'- Registre el seguimiento solo cuando vuelva a intentar una prueba por primera vez.
  },

  /* Configure projects for major browsers */
  projects: [
 /*    {
       name: 'Desktop Chromium',
       use: {
         browserName: 'chromium',
         viewport: { width: 1250, height: 720 },
       },
     },*/
     {
       name: 'Desktop Safari',
       use: {
         browserName: 'webkit',
         viewport: { width: 1400, height: 720 },
       }
     },
  //   {
  //     name: 'Desktop Firefox',
  //     use: {
  //       browserName: 'firefox',
  //       viewport: { width: 1800, height: 720 },
  //     }
  //   },
  //   {
  //     name: 'Mobile Chrome',
  //     use: devices['Pixel 5'],
  //   },
  //   {
  //     name: 'Mobile Safari',
  //     use: devices['iPhone 12'],
  //   },
],
};
module.exports = config;