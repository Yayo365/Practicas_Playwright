//import { test, expect } from '@playwright/test';
const {test, expect} = require("@playwright/test")

test ("Drag and Drop", async ({page}) => {

    await page.goto("https://formy-project.herokuapp.com/dragdrop")

    const Drag_High_Tatras = await page.locator("//div[@id='box']")

    const Drop_Trask = await page.locator("//img[@src='/assets/selenium-logo-c1d6f4654a0c8f8bef745f71b4e22836224aabc2116f405ef511cd79c48f2947.png']")

    await Drag_High_Tatras.dragTo(Drop_Trask)

    await page.waitForTimeout(2000)
}
)