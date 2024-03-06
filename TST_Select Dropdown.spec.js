const {test, expect} = require("@playwright/test")

test ("ScreenShot Basic",async ({page}) => {
    await page.goto("https://www.saucedemo.com/")

    await page.locator("//input[contains(@placeholder,'Username')]").fill("standard_user")
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click()

    await page.waitForTimeout(1000)

    await page.locator("//select[@class='product_sort_container']").selectOption("lohi")
    await page.locator("//select[@class='product_sort_container']").selectOption({Label: "Price (high to low)"})


    await page.waitForTimeout(1000)
    

})