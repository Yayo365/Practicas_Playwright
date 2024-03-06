const {test, expect} = require ("@playwright/test");
const { time } = require("console");
const exp = require('constants');

test ("Mouse Hover", async ({page},) =>{

    await page.goto('https://demo.opencart.com/');

    //Declaracion de variables para validar hover
    const desk = await page.locator("(//a[contains(.,'Desktops')])[1]")
    const option2 = await page.locator("//a[normalize-space()='Mac (1)']")

    await desk.hover()
    await option2.hover()
    await option2.click()

    await page.waitForTimeout(5000)

})