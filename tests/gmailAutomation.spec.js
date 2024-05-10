import NavigatePagePo from "../PageObjects/NavigatePage";

// @ts-check
const { test, expect } = require('@playwright/test');

test('Gmail E2E test', async ({ page }) => {
   var navigatePagePo= new NavigatePagePo(page);

   await page.goto('https://www.google.com/gmail/about/')
   await page.waitForTimeout(2000);
   expect(page.url()).toBe("https://www.google.com/gmail/about/")
   
   await navigatePagePo.loginToGmail();
   await page.waitForTimeout(10000);
   await page.screenshot({ path: 'screenshot.png' });
  
   expect (page.url()).toBe("https://mail.google.com/mail/u/0/#inbox")
  });

