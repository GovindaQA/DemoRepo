import { test, expect } from "../fixture/pomSynpressFixture";


test.describe("Demo Tests", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
    await homePage.connectWallet();

  });

  test("Swap function is successful for EVM to EVM (BNB-L1X)", async ({homePage }) => {
    
    await homePage.performAllTC01Actions();
  

  });
  test("Swap function is successful", async ({homePage }) => {
    
    await homePage.performAllTC02Actions();
  

  });

  test("Swap function is successful for EVM to EVM", async ({homePage }) => {
    
    await homePage.performAllTC03Actions();
  

  });

});
