import { type Page, type Locator } from "@playwright/test";
import dotenv from "dotenv";
import * as metamask from "@synthetixio/synpress/commands/metamask";
dotenv.config();
import{acceptAccess} from "@synthetixio/synpress/commands/metamask";
import{confirmSignatureRequest} from "@synthetixio/synpress/commands/metamask";

export default class BasePage {
  readonly page: Page;
  readonly btnSwap: Locator;
  readonly btnWallet: Locator;
  readonly btnMetaWallet: Locator;
  readonly sourceField: Locator;
  readonly sourchChainDropDown: Locator
  readonly sourchChainBNB: Locator
  readonly sourchChainBNBToken: Locator






  constructor(page: Page) {
    this.page = page;

    // Locators
    this.btnSwap = this.page.locator("(//div[@class='widget-quick-links']//descendant::a)[2]");
    this.btnWallet = this.page.locator("button.wallet-btn");
    this.btnMetaWallet = this.page.locator("(//div[@class='wallet-block-body']//child::div)[3]");
  }

  async navigate(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async connectWallet(): Promise<void> {
    await this.btnSwap.click();
    await this.btnWallet.click();
    await this.btnMetaWallet.click();
    await acceptAccess();
    await confirmSignatureRequest();

  }
}
