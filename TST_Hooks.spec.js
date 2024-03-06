const {test, expect} = require ("@playwright/test")

let page
const Use= "Test2024y"
const pass= "@L1234567a"
let Web= "https://www.demoblaze.com/"
let Min =1500

test.beforeEach(async ({browser})=> {
    page= await browser.newPage()
    //Cargar Pagina
    await page.goto(Web)
    await expect(page).toHaveTitle(`STORE`)

    await page.waitForTimeout(Min);

    //Asserts
    await expect(page.locator("//label[@for='log-name']")).toHaveText("Username:")
    await expect(page.locator("//label[@for='log-pass'][contains(.,'Password:')]")).toHaveText("Password:")
    await expect(page.locator("//a[@id='login2']")).toBeEnabled()

    //Login
    await page.locator ("//a[@id='login2']").click()
    await page.locator("//input[@id='loginusername']").type(Use)
    await page.type("//input[@id='loginpassword']",pass)
    await page.click("//button[contains(text(),'Log in')]")
    
    await page.waitForTimeout(Min);
})
test.afterEach(async()=> {
    //Logout
    await expect(page.locator("//a[@id='logout2']")).toBeEnabled()
    await page.locator ("//a[@id='logout2']").click()
})
test('Validar Home Page', async ( ) => {
    await expect(page.locator("//a[@id='nameofuser']")).toBeVisible()
    await expect(page.locator("//a[@id='nameofuser']")).toHaveText("Welcome Test2024y")
    await expect(page.locator("#cat")).toHaveText("CATEGORIES")

    await page.waitForTimeout(Min);
})
test('Agregar al carrito', async ( ) => {
    await page.locator("//a[contains(text(),'Phones')]").click()
    await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click()

    await page.waitForTimeout(Min);

    await expect(page.locator("//a[@class='btn btn-success btn-lg']")).toBeEnabled()
    await page.click("//a[@class='btn btn-success btn-lg']")

    //Validar Ventana Emergente
    page.on('dialog',async dialog => {
        expect (dialog.message()).toContain("Product added")
        await dialog.accept()
    })
    //await page.click("//button[contains(.,'Aceptar')]")

    await page.waitForTimeout(Min);
})