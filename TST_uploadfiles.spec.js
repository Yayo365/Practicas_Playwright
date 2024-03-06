import { test, expect } from '@playwright/test';

test('Upload File', async ({ page }) => {
    await page.goto("https://gofile.io/welcome")

    await page.waitForSelector("//button[normalize-space()='Upload Files']")
    await page.locator("//button[normalize-space()='Upload Files']").click()

    await page.waitForTimeout(2000)

    //await page.locator("//button[normalize-space()='Add files']").setInputFiles("Curso_24/tests/UploadFiles/Borad_QA.png")

    //await page.waitForTimeout(2000)
})