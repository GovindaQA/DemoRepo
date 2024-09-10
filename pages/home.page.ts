    import { Locator, Page } from "@playwright/test";
    import BasePage from "./base.page";


    export default class HomePage extends BasePage {
        readonly path: string;
        // locators for EVM to EVM BNB-L1X
        readonly sourceChainDropDown: Locator;
        readonly destinationChainDropDown: Locator;

        readonly sourceChain_TC01: Locator;
        readonly sourceChainToken_TC01: Locator;

        readonly destinationChain_TC01: Locator;
        readonly destinationChainToken_TC01: Locator;

        // locators for NonEVM to L1X 
        readonly sourceChain_TC02: Locator;
        readonly sourceChainToken_TC02: Locator;

        readonly destinationChain_TC02: Locator;
        readonly destinationChainToken_TC02: Locator;

      // TC03 Locators
        readonly sourceChain_TC03: Locator;
        readonly sourceChainToken_TC03: Locator;

        readonly destinationChain_TC03: Locator;
        readonly destinationChainToken_TC03: Locator;



        
        constructor(page: Page) {
          super(page);
          this.path = "https://l1xapp.com";

    // Common Locators
    this.sourceChainDropDown = this.page.locator("(//img[@alt='Down Arrow'])[1]");
    this.destinationChainDropDown = this.page.locator("(//img[@alt='Down Arrow'])[2]");

    this.sourceChain_TC01 = this.page.locator("(//div[contains(@class,'netwrok-space mb-3')])[3]");
    this.sourceChainToken_TC01 = this.page.locator("//p[normalize-space()='BNB']");
    this.destinationChain_TC01 = this.page.locator("(//p[normalize-space()='Layer One X'])[1]");
    this.destinationChainToken_TC01 = this.page.locator("//div[@class='row choose-token']//div[@class='netwrok-space mb-3 active']");

    this.sourceChain_TC02 = this.page.locator("(//div[contains(@class,'netwrok-space mb-3')])[3]");
    this.sourceChainToken_TC02 = this.page.locator("//p[normalize-space()='USDT']");
    this.destinationChain_TC02 = this.page.locator("(//p[normalize-space()='Layer One X'])[1]");
    this.destinationChainToken_TC02 = this.page.locator("//div[@class='row choose-token']//div[@class='netwrok-space mb-3 active']");

    this.sourceChain_TC03 = this.page.locator("(//div[contains(@class,'netwrok-space mb-3')])[3]");
    this.sourceChainToken_TC03 = this.page.locator("//p[normalize-space()='USDT']");
    this.destinationChain_TC03 = this.page.locator("//p[normalize-space()='Avalanche']");
    this.destinationChainToken_TC03 = this.page.locator("//p[normalize-space()='USDT']");

          
        }
      
        async navigate(): Promise<void> {
          await super.navigate(this.path);
        }

        async performAllTC01Actions(): Promise<void> {
          // Click on the source chain dropdown
          await this.sourceChainDropDown.click();
      
          // Click on the source chain for TC01
          await this.sourceChain_TC01.click();
      
          // Click on the source chain token for TC01
          await this.sourceChainToken_TC01.click();
      
          // Click on the destination chain dropdown
          await this.destinationChainDropDown.click();
      
          // Click on the destination chain for TC01
          await this.destinationChain_TC01.click();
      
          // Click on the destination chain token for TC01
          await this.destinationChainToken_TC01.click();
      }

      async performAllTC02Actions(): Promise<void> {
        // Click on the source chain dropdown
        await this.sourceChainDropDown.click();
    
        // Click on the source chain for TC02
        await this.sourceChain_TC02.click();
    
        // Click on the source chain token for TC02
        await this.sourceChainToken_TC02.click();
    
        // Click on the destination chain dropdown
        await this.destinationChainDropDown.click();
    
        // Click on the destination chain for TC02
        await this.destinationChain_TC02.click();
    
        // Click on the destination chain token for TC02
        await this.destinationChainToken_TC02.click();
    }
    
    async performAllTC03Actions(): Promise<void> {
      // Click on the source chain dropdown
      await this.sourceChainDropDown.click();
  
      // Click on the source chain for TC03
      await this.sourceChain_TC03.click();
  
      // Click on the source chain token for TC03
      await this.sourceChainToken_TC03.click();
  
      // Click on the destination chain dropdown
      await this.destinationChainDropDown.click();
  
      // Click on the destination chain for TC03
      await this.destinationChain_TC03.click();
  
      // Click on the destination chain token for TC03
      await this.destinationChainToken_TC03.click();
  }
  


    }  