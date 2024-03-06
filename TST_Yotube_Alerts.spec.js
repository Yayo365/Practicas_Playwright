const {test, expect} = require ("@playwright/test")
const exp = require("constants")

test ("Prueba para validar Alert Sencillo",async ({page}) =>{

    await page.goto ("https://testautomationpractice.blogspot.com/")

    //Controlado de llamado de ventanas
    page.on('dialog',async dialog => {
        //console.log(dialog.message());
        expect (dialog.type()).toContain("alert")
        expect (dialog.message()).toContain("I am an alert box!")
        await dialog.accept()
    }
    )
    await page.click("//button[contains(.,'Alert')]")

    await page.waitForTimeout(5000)
}
)
test ("Prueba para validar Alert con OK o Cancel",async ({page}) =>{

    await page.goto ("https://testautomationpractice.blogspot.com/")

    //Controlado de llamado de ventanas
    page.on('dialog',async dialog => {
        //console.log(dialog.message());
        expect (dialog.type()).toContain("confirm")
        expect (dialog.message()).toContain("Press a button!")
        //await dialog.accept()
        await dialog.dismiss()
    }
    )
    await page.click("//button[@onclick='myFunctionConfirm()']")

    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!")

    await page.waitForTimeout(5000)
}
)
test.only ("Promt Cuadro de Dialogo",async ({page}) =>{

    await page.goto ("https://testautomationpractice.blogspot.com/")

    //Controlado de llamado de ventanas
    page.on('dialog',async dialog => {
        //console.log(dialog.message());
        expect (dialog.type()).toContain("prompt")
        expect (dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept()
    }
    )
    await page.click("//button[@onclick='myFunctionPrompt()']")

    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Harry Potter! How are you today?")

    await page.waitForTimeout(5000)
}
)