const {test, expect} = require("@playwright/test")

test ("Date Calender 1", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.mouse.move(0, 500);

    await page.locator("//input[@id='datepicker']").type("01/01/1990")

    await page.waitForTimeout(1500)

})

test ("Date Calender 2", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.mouse.move(0, 1250);

    await page.locator("//input[contains(@date,'mm/dd/yy')]").type("12311990")

    await page.waitForTimeout(1500)

})
