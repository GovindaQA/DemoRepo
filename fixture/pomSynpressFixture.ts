import { test as base, chromium, type BrowserContext } from "@playwright/test";
import { setExpectInstance } from "@synthetixio/synpress/commands/playwright";
import { prepareMetamask } from "@synthetixio/synpress/helpers";
import { initialSetup } from "@synthetixio/synpress/commands/metamask";
import { resetState } from "@synthetixio/synpress/commands/synpress";
import dotenv from "dotenv";
import HomePage from "../pages/home.page";
import BasePage from "../pages/base.page";
dotenv.config();

interface Page {
  context: BrowserContext;
  homePage: HomePage;
}

export const test = base.extend<Page>({
  context: async ({}, use) => {
    // required for synpress as it shares same expect instance as playwright
    await setExpectInstance(expect);
    // download metamask
    const metamaskPath: string = await prepareMetamask(
      // process.env.METAMASK_VERSION != null || "10.25.0"  /*this is the stable version*/
      // process.env.METAMASK_VERSION != null || "10.30.4" /* this will work for sign in becuase its selector for SignIn button in the synpress repo is same as we are getting  */
      process.env.METAMASK_VERSION != null || "11.15.5" /* Synpress Supported Version*/


    );
    // prepare browser args
    const browserArgs = [
      `--disable-extensions-except=${metamaskPath}`,// Custom step: Wait for the checkbox to appear and check it
      //  const metamaskPage = context.pages().find(page => page.url().includes('chrome-extension://'));
      
      //  if (metamaskPage) {
      //    const checkboxSelector = "//input[@id='onboarding__terms-checkbox']"; // Replace with the actual selector of the checkbox
   
      //    // Wait for the checkbox to be visible
      //    await metamaskPage.waitForSelector(checkboxSelector, { state: "visible" });
   
      //    // Check the checkbox
      //    await metamaskPage.check(checkboxSelector);
      //    await metamaskPage.click(checkboxSelector);
  
  
      //  }
      `--load-extension=${metamaskPath}`,
      "--remote-debugging-port=9222",
    ];
    if (process.env.CI != null) {
      browserArgs.push("--disable-gpu");
    }
    if (process.env.HEADLESS_MODE === "true") {
      browserArgs.push("--headless=new");
    }
    // launch browser
    const context = await chromium.launchPersistentContext("", {
      headless: false,
      args: browserArgs,
    });
    // wait for metamask
    await context.pages()[0].waitForTimeout(3000);
  
  //   // setup metamask
    await initialSetup(chromium, {

      secretWordsOrPrivateKey: process.env.METAMASK_SETUP_PRIVATE_KEY,
      network: process.env.METAMASK_SETUP_NETWORK,
      password: process.env.METAMASK_SETUP_PASSWORD,
      enableAdvancedSettings: true,
      enableExperimentalSettings: false,
    });

    //  // Custom step: Wait for the checkbox to appear and check it
    //  const metamaskPage = context.pages().find(page => page.url().includes('chrome-extension://'));
    
    //  if (metamaskPage) {
    //    const checkboxSelector = "//input[@id='onboarding__terms-checkbox']"; // Replace with the actual selector of the checkbox
 
    //    // Wait for the checkbox to be visible
    //    await metamaskPage.waitForSelector(checkboxSelector, { state: "visible" });
 
    //    // Check the checkbox
    //    await metamaskPage.check(checkboxSelector);
    //    await metamaskPage.click(checkboxSelector);


    //  }
    
    await use(context);
    await context.close();
    await resetState();
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export const expect = test.expect;
