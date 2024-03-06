const {test, expect} = require('@playwright/test')

test("Prubeas de DropDown 1,", async ({page}) => {
    //Seleccionar una opcion del ComboBox.
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.mouse.wheel(0, 800);

    //await page.locator("//select[contains(@id,'country')]").selectOption({value:"australia"})
    await page.selectOption("//select[contains(@id,'country')]","australia")

    await page.waitForTimeout(2500);
})
test.only("Prubeas de DropDown 2,", async ({page}) => {
    //Seleccionar una opcion autocompletando.
    await page.goto("https://www.redbus.in/")

    //await page.click("//input[contains(@id,'src')]")
    await page.type("//input[contains(@id,'src')]","pao")
    await page.waitForSelector("//ul[contains(@class,'sc-dnqmqq eFEVtU')]")

    const Options_drop = await page.$$("//ul[contains(@class,'sc-dnqmqq eFEVtU')]")

    for(let option1 of Options_drop)
    {
        const value= await option1.textContent()
        console.log(value)    
        if (value.includes("Paoni")){
            await option1.click()
            break;

        }
    }
    await page.waitForTimeout(5000);

    page.close();
}
)