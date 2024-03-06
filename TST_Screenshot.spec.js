const {test, expect} = require("@playwright/test")

test ("ScreenShot Basic",async ({page}) => {
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path: "tests/Screens/"+Date.now()+"Homepage.png"})

})
test ("ScreenShot Full",async ({page}) => {
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path: "tests/Screens/"+Date.now()+"Fullpage.png", fullPage:true})
    
})
test ("ScreenShot Element",async ({page}) => {
    await page.goto("https://demo.opencart.com/")
    await page.locator("//a[contains(text(),'Canon EOS 5D')]").click()
    expect(page.locator("//h1[contains(text(),'Canon EOS 5D')]")).toBeVisible()
    await page.locator("//div[@id='product-info']").screenshot({path:"tests/Screens/"+Date.now()+"DetalleCamara.png"})
})